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
1. Create a .env file (follow the example.env)
```env
// Config
ADMIN_ROLE = 
LOG_WEBHOOK_URL = 
REPORT_CHANNEL= 

// Discord Bot Information
DISCORD_TOKEN = 
DISCORD_APPLICATION_ID= 
GUILD_ID = 

// DB Info
MONGODB_URI = 
```

## Running the Bot

1. Start the bot:

   ```bash
   node bot
   ```

  And You're Done. Your server's links will be handled with great care with this Dispenser!
