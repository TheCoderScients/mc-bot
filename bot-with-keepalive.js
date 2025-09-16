const mineflayer = require('mineflayer');
const express = require('express');

// Initialize Express app for keep-alive
const app = express();
const port = process.env.PORT || 3000;

// Bot configuration
const botConfig = {
  host: 'SigmaServer27.aternos.me',
  port: 13716,
  username: process.env.BOT_USERNAME || 'Bot24_7',
  version: false, // Auto-detect server version
  auth: 'offline' // Server is in cracked mode
};

let bot;
let reconnectAttempts = 0;
let botStatus = 'starting';
const maxReconnectAttempts = 10;
const reconnectDelay = 30000;

function createBot() {
  console.log(`[${new Date().toLocaleString()}] Attempting to connect to ${botConfig.host}...`);
  botStatus = 'connecting';
  
  bot = mineflayer.createBot(botConfig);

  bot.on('login', () => {
    console.log(`[${new Date().toLocaleString()}] ✅ Bot logged in successfully!`);
    console.log(`[${new Date().toLocaleString()}] Connected to: ${botConfig.host}`);
    botStatus = 'online';
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
    
    setTimeout(() => {
      bot.chat('Bot 24/7 is now online in spectator mode! 👻🤖');
    }, 3000);
  });

  bot.on('chat', (username, message) => {
    if (username === bot.username) return;
    
    console.log(`[${new Date().toLocaleString()}] <${username}> ${message}`);
    
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
    botStatus = 'disconnected';
    handleReconnect();
  });

  bot.on('error', (err) => {
    console.log(`[${new Date().toLocaleString()}] ❌ Bot error: ${err.message}`);
    botStatus = 'error';
    handleReconnect();
  });

  bot.on('end', () => {
    console.log(`[${new Date().toLocaleString()}] 🔌 Connection ended`);
    botStatus = 'disconnected';
    handleReconnect();
  });

  // Anti-AFK system - Modified for spectator mode
  setInterval(() => {
    if (bot && bot.entity) {
      // In spectator mode, use look movement instead of jump
      const currentYaw = bot.entity.yaw;
      bot.look(currentYaw + 0.1, 0); // Slight look movement
      console.log(`[${new Date().toLocaleString()}] 👻 Anti-AFK: Look movement in spectator mode`);
    }
  }, 60000);
}

function handleReconnect() {
  if (reconnectAttempts < maxReconnectAttempts) {
    reconnectAttempts++;
    botStatus = 'reconnecting';
    console.log(`[${new Date().toLocaleString()}] 🔄 Reconnecting in ${reconnectDelay/1000} seconds... (Attempt ${reconnectAttempts}/${maxReconnectAttempts})`);
    
    setTimeout(() => {
      createBot();
    }, reconnectDelay);
  } else {
    console.log(`[${new Date().toLocaleString()}] ❌ Max reconnection attempts reached. Stopping bot.`);
    botStatus = 'failed';
    process.exit(1);
  }
}

function formatUptime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${hours}h ${minutes}m ${secs}s`;
}

function getBotInfo() {
  return {
    status: botStatus,
    uptime: process.uptime(),
    server: botConfig.host,
    username: botConfig.username,
    reconnectAttempts: reconnectAttempts,
    health: bot ? bot.health : 'N/A',
    food: bot ? bot.food : 'N/A',
    position: bot && bot.entity ? bot.entity.position : 'N/A'
  };
}

// Express routes
app.get('/', (req, res) => {
  const botInfo = getBotInfo();
  const statusColor = botInfo.status === 'online' ? '#28a745' : 
                     botInfo.status === 'connecting' ? '#ffc107' : '#dc3545';
  
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Minecraft Bot 24/7 - SigmaServer27</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                margin: 0;
                padding: 20px;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .container {
                background: white;
                border-radius: 15px;
                padding: 40px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                text-align: center;
                max-width: 600px;
            }
            .status {
                color: ${statusColor};
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
                text-transform: uppercase;
            }
            .info {
                color: #666;
                margin: 10px 0;
            }
            .server-info {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 10px;
                margin: 20px 0;
            }
            .stats {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
                margin: 20px 0;
            }
            .stat-box {
                background: #e9ecef;
                padding: 15px;
                border-radius: 8px;
            }
            .emoji {
                font-size: 48px;
                margin-bottom: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="emoji">🤖</div>
            <div class="status">${botInfo.status}</div>
            <div class="server-info">
                <h3>🎮 Minecraft Server</h3>
                <p><strong>Server:</strong> ${botInfo.server}</p>
                <p><strong>Bot Username:</strong> ${botInfo.username}</p>
                <p><strong>Uptime:</strong> ${formatUptime(botInfo.uptime)}</p>
            </div>
            <div class="stats">
                <div class="stat-box">
                    <strong>❤️ Health</strong><br>
                    ${botInfo.health}/20
                </div>
                <div class="stat-box">
                    <strong>🍖 Food</strong><br>
                    ${botInfo.food}/20
                </div>
            </div>
            <div class="info">
                <p>🕒 Last update: ${new Date().toLocaleString()}</p>
                <p>🔄 Auto-refresh every 30 seconds</p>
                <p>📡 Reconnect attempts: ${botInfo.reconnectAttempts}/${maxReconnectAttempts}</p>
            </div>
        </div>
        <script>
            setTimeout(() => {
                window.location.reload();
            }, 30000);
        </script>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json(getBotInfo());
});

app.get('/ping', (req, res) => {
  res.json({ 
    message: 'pong', 
    timestamp: Date.now(),
    bot_status: botStatus,
    uptime: process.uptime()
  });
});

// Start web server
app.listen(port, () => {
  console.log(`[${new Date().toLocaleString()}] 🌐 Keep-alive server running on port ${port}`);
  console.log(`[${new Date().toLocaleString()}] 📊 Status page: http://localhost:${port}`);
});

// Keep-alive ping
setInterval(() => {
  console.log(`[${new Date().toLocaleString()}] 💓 Keep-alive ping - Bot: ${botStatus} - Uptime: ${Math.floor(process.uptime())}s`);
}, 300000);

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
console.log(`[${new Date().toLocaleString()}] 🚀 Starting Minecraft Bot 24/7 with Keep-Alive...`);
console.log(`[${new Date().toLocaleString()}] Target server: ${botConfig.host}:${botConfig.port}`);
createBot();
