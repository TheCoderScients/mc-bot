# 🤖 Minecraft Bot 24/7 - SigmaServer27

Bot Minecraft 24/7 untuk server **SigmaServer27.aternos.me** dengan fitur auto-reconnect, anti-AFK, dan web monitoring dashboard.

## ✨ Features

- 🎮 **Auto Connect** ke server Minecraft
- 🔄 **Auto Reconnect** dengan retry system
- 🏃 **Anti-AFK** mencegah kick karena idle
- 💬 **Chat Commands** untuk interaksi
- 📊 **Web Dashboard** untuk monitoring real-time
- 💓 **Keep-Alive Server** untuk hosting 24/7
- 🛡️ **Error Handling** yang robust

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Bot
```bash
npm start
```

### 3. Monitor Status
Buka browser: `http://localhost:3000`

## 📋 Commands

| Command | Description |
|---------|-------------|
| `npm start` | Jalankan bot dengan keep-alive (recommended) |
| `npm run bot` | Jalankan hanya bot Minecraft |
| `npm run keep-alive` | Jalankan hanya web server |

## 💬 In-Game Commands

Bot akan merespons chat di server:
- **"bot status"** - Menampilkan status dan uptime
- **"bot info"** - Menampilkan health dan food level

## ⚙️ Configuration

Copy `.env.example` ke `.env` dan sesuaikan:

```env
BOT_USERNAME=Bot24_7
SERVER_HOST=SigmaServer27.aternos.me
SERVER_PORT=25565
SERVER_VERSION=1.20.1
AUTH_TYPE=offline
PORT=3000
```

## 🌐 Deploy 24/7

### Replit
1. Upload project ke Replit
2. Set environment variables
3. Run `npm start`
4. Gunakan UptimeRobot untuk ping

### Railway
1. Connect repository ke Railway
2. Deploy otomatis
3. Bot running 24/7

### Heroku
1. Create Heroku app
2. Set buildpack ke Node.js
3. Deploy via Git

## 📊 Web Dashboard

Dashboard tersedia di port 3000 dengan informasi:
- ✅ Status koneksi bot
- ⏱️ Uptime tracking
- ❤️ Health & food levels
- 📡 Reconnection attempts
- 🕒 Real-time updates

## 🔧 Troubleshooting

### Bot tidak connect
- Pastikan server Aternos online
- Cek username tidak bentrok dengan player lain
- Verifikasi versi Minecraft sesuai server

### Sering disconnect
- Cek stabilitas koneksi internet
- Sesuaikan `RECONNECT_DELAY` di config
- Monitor logs untuk error patterns

### Keep-alive tidak jalan
- Pastikan port 3000 tidak digunakan aplikasi lain
- Cek firewall settings
- Test akses `http://localhost:3000`

## 📁 Project Structure

```
Bot Server 247/
├── package.json              # Dependencies
├── bot.js                    # Standalone bot
├── keep-alive.js            # Web server
├── bot-with-keepalive.js    # Main combined file
├── .env.example             # Config template
├── setup-guide.md           # Detailed setup guide
└── README.md                # This file
```

## 🛠️ Development

### Local Testing
```bash
# Install dependencies
npm install

# Start in development
npm start

# Check logs
# Bot akan menampilkan logs di console
```

### Custom Features
Bot dapat dikustomisasi dengan menambahkan:
- Custom chat commands
- Auto-farming features
- Player tracking
- Inventory management

## 🎯 Server Info

- **Server:** SigmaServer27.aternos.me
- **Port:** 25565
- **Version:** 1.20.1
- **Type:** Aternos (Free hosting)

## 📝 Notes

- Bot menggunakan authentication `offline` untuk server cracked
- Anti-AFK system melakukan jump setiap 60 detik
- Auto-reconnect maksimal 10 attempts dengan delay 30 detik
- Web dashboard auto-refresh setiap 30 detik

## 🆘 Support

Jika mengalami masalah:
1. Cek console logs untuk error messages
2. Pastikan server Aternos dalam status online
3. Restart bot dengan `npm start`
4. Periksa konfigurasi di file `.env`

---

**Ready to deploy! 🚀**  
Bot siap untuk running 24/7 di server SigmaServer27.aternos.me
