import dispense from "../dispense.js";

const free = {
    id: 'free',
    async run(client, interaction) {
        try {
            dispense(client, interaction)
        } catch (error) {
            console.error('Error handling "free" button:', error);
        }
    }
};

export default free;
