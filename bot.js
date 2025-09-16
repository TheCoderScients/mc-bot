const mineflayer = require('mineflayer');

// Bot configuration
const botConfig = {
  host: 'SigmaServer27.aternos.me',
  port: 13716,
  username: process.env.BOT_USERNAME || 'Bot24_7',
  version: '1.21.8', // Specify version explicitly
  auth: 'offline' // Use 'microsoft' if you have a premium account
};

let bot;
let reconnectAttempts = 0;
const maxReconnectAttempts = 10;
const reconnectDelay = 30000; // 30 seconds

function createBot() {
  console.log(`[${new Date().toLocaleString()}] Attempting to connect to ${botConfig.host}...`);
  
  bot = mineflayer.createBot(botConfig);

  // Bot events
  bot.on('login', () => {
    console.log(`[${new Date().toLocaleString()}] ✅ Bot logged in successfully!`);
    console.log(`[${new Date().toLocaleString()}] Connected to: ${botConfig.host}`);
    reconnectAttempts = 0;
  });

  bot.on('spawn', () => {
    console.log(`[${new Date().toLocaleString()}] 🎮 Bot spawned in the world!`);
    console.log(`[${new Date().toLocaleString()}] Position: ${bot.entity.position}`);
    
    // Set to spectator mode
    setTimeout(() => {
      bot.chat('/gamemode spectator');
      console.log(`[${new Date().toLocaleString()}] 👻 Switched to spectator mode`);
    }, 1000);
    
    // Send a message when bot joins (optional)
    setTimeout(() => {
      bot.chat('Bot 24/7 is now online in spectator mode! 👻🤖');
    }, 3000);
  });

  bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    
    console.log(`[${new Date().toLocaleString()}] <${username}> ${message}`);
    
    // Basic bot commands
    if (message.toLowerCase().includes('bot status')) {
      bot.chat(`I'm online and running! Uptime: ${formatUptime(process.uptime())}`);
    }
    
    if (message.toLowerCase().includes('bot info')) {
      bot.chat(`24/7 Bot (Spectator Mode) | Health: ${bot.health}/20 | Food: ${bot.food}/20`);
    }
  });

  bot.on('health', () => {
    if (bot.health < 20 || bot.food < 20) {
      console.log(`[${new Date().toLocaleString()}] ⚠️ Health: ${bot.health}/20, Food: ${bot.food}/20`);
    }
  });

  bot.on('death', () => {
    console.log(`[${new Date().toLocaleString()}] 💀 Bot died! Respawning...`);
    bot.chat('I died but I\'m back! 👻');
  });

  bot.on('kicked', (reason) => {
    console.log(`[${new Date().toLocaleString()}] ❌ Bot was kicked: ${reason}`);
    handleReconnect();
  });

  bot.on('error', (err) => {
    console.log(`[${new Date().toLocaleString()}] ❌ Bot error: ${err.message}`);
    handleReconnect();
  });

  bot.on('end', () => {
    console.log(`[${new Date().toLocaleString()}] 🔌 Connection ended`);
    handleReconnect();
  });

  // Keep bot active (anti-AFK) - Modified for spectator mode
  setInterval(() => {
    if (bot && bot.entity) {
      // In spectator mode, use look movement instead of jump
      const currentYaw = bot.entity.yaw;
      bot.look(currentYaw + 0.1, 0); // Slight look movement
      console.log(`[${new Date().toLocaleString()}] 👻 Anti-AFK: Look movement in spectator mode`);
    }
  }, 60000); // Every minute
}

function handleReconnect() {
  if (reconnectAttempts < maxReconnectAttempts) {
    reconnectAttempts++;
    console.log(`[${new Date().toLocaleString()}] 🔄 Reconnecting in ${reconnectDelay/1000} seconds... (Attempt ${reconnectAttempts}/${maxReconnectAttempts})`);
    
    setTimeout(() => {
      createBot();
    }, reconnectDelay);
  } else {
    console.log(`[${new Date().toLocaleString()}] ❌ Max reconnection attempts reached. Stopping bot.`);
    process.exit(1);
  }
}

function formatUptime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hours}h ${minutes}m ${secs}s`;
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log(`[${new Date().toLocaleString()}] 🛑 Shutting down bot...`);
  if (bot) {
    bot.chat('Bot going offline. See you later! 👋');
    bot.quit();
  }
  process.exit(0);
});

// Start the bot
console.log(`[${new Date().toLocaleString()}] 🚀 Starting Minecraft Bot 24/7...`);
console.log(`[${new Date().toLocaleString()}] Target server: ${botConfig.host}:${botConfig.port}`);
createBot();
