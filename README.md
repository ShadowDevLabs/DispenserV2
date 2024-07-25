# DispenserV2
A discord bot to dispense/manage links. V2 supports logging, better history, better command & component handling.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ShadowDevLabs/DispenserV2.git
   ```

2. Navigate to the project folder:

   ```bash
   cd Dispenser
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Open the `config.json` file and configure the following settings:

   - `db.uri`: MongoDB connection URI.
   - `bot.token`: Discord bot token.
   - `bot.client_id`: Discord bot client ID.
   - `bot.guild_id`: Discord guild ID. 
   -  Fill in all the blank/non-filled values in the config.json as well. 

## Running the Bot

1. Start the bot:

   ```bash
   node index.js
   ```

  And You're Done. Your server's links will be handled with great care with this Dispenser!
