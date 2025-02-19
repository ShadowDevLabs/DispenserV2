import Discord from 'discord.js';

import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';

const __dirname = url.fileURLToPath(new URL('../', import.meta.url));

/**
 * @param {import('discord.js').Client} client
 */
const registerCommands = async (client) => {
    const files = fs.readdirSync(path.join(__dirname, 'commands')).filter((file) => file !== 'index.js');
    const commands = new Discord.Collection();
    const commandsMeta = [];

    for (let i = 0; i < files.length; i++) {
        const { default: command } = await import('./' + files[i]);

        commands.set(command.meta.name, command);
        commandsMeta.push(command.meta.toJSON());
    }

    client.on('ready', async () => {
        await new Discord.REST()
            .setToken(process.env.DISCORD_TOKEN)
            .put(Discord.Routes.applicationGuildCommands(process.env.DISCORD_APPLICATION_ID, process.env.GUILD_ID), {
                body: commandsMeta
            });
    });

    client.on(Discord.Events.InteractionCreate, async (interaction) => {
        if (!interaction.isChatInputCommand()) return;
        
        const member = interaction.member;
        const commandName = interaction.commandName;
    
        if (commandName === 'addlink') {
            if (!member.roles.cache.has(process.env.ADMIN_ROLE) && !member.roles.cache.has('1341164622232813598')) {
                await interaction.reply({ content: "You are not allowed to run this command.", ephemeral: true });
                return;
            }
        } else {
            if (!member.roles.cache.has(process.env.ADMIN_ROLE)) {
                await interaction.reply({ content: "You are not allowed to run this command.", ephemeral: true });
                return;
            }
        }
    
        const command = commands.get(commandName);
        command.handler(interaction, client);
});

export default registerCommands;
