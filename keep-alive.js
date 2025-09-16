const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple web server to keep the bot alive on hosting platforms
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Minecraft Bot 24/7 - Status</title>
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
                max-width: 500px;
            }
            .status {
                color: #28a745;
                font-size: 24px;
                font-weight: bold;
                margin-bottom: 20px;
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
            .emoji {
                font-size: 48px;
                margin-bottom: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="emoji">🤖</div>
            <div class="status">✅ Bot is Online!</div>
            <div class="server-info">
                <h3>🎮 Minecraft Server</h3>
                <p><strong>Server:</strong> SigmaServer27.aternos.me</p>
                <p><strong>Status:</strong> Connected & Active</p>
                <p><strong>Uptime:</strong> ${Math.floor(process.uptime() / 3600)}h ${Math.floor((process.uptime() % 3600) / 60)}m</p>
            </div>
            <div class="info">
                <p>🕒 Last ping: ${new Date().toLocaleString()}</p>
                <p>🔄 Auto-refresh every 30 seconds</p>
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'online',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    server: 'SigmaServer27.aternos.me'
  });
});

// Ping endpoint for external monitoring
app.get('/ping', (req, res) => {
  res.json({ 
    message: 'pong', 
    timestamp: Date.now(),
    uptime: process.uptime()
  });
});

// Start the web server
app.listen(port, () => {
  console.log(`[${new Date().toLocaleString()}] 🌐 Keep-alive server running on port ${port}`);
  console.log(`[${new Date().toLocaleString()}] 📊 Status page: http://localhost:${port}`);
});

// Keep the process alive
setInterval(() => {
  console.log(`[${new Date().toLocaleString()}] 💓 Keep-alive ping - Uptime: ${Math.floor(process.uptime())}s`);
}, 300000); // Every 5 minutes

module.exports = app;
