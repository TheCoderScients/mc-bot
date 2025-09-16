# 🤖 Minecraft Bot 24/7 - Setup Guide

## 📋 Panduan Lengkap Setup Bot untuk SigmaServer27.aternos.me

### 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Bot**
   ```bash
   npm start
   ```

3. **Access Status Page**
   - Local: http://localhost:3000
   - Hosting: Your deployed URL

### 📁 File Structure

```
Bot Server 247/
├── package.json              # Dependencies dan scripts
├── bot.js                    # Bot Minecraft standalone
├── keep-alive.js            # Web server untuk keep-alive
├── bot-with-keepalive.js    # Bot + Keep-alive combined (MAIN FILE)
├── .env.example             # Template konfigurasi
├── setup-guide.md           # Panduan ini
└── README.md                # Dokumentasi lengkap
```

### ⚙️ Konfigurasi

1. **Copy file .env.example ke .env**
   ```bash
   copy .env.example .env
   ```

2. **Edit .env sesuai kebutuhan:**
   ```env
   BOT_USERNAME=NamaBot_Anda
   SERVER_HOST=SigmaServer27.aternos.me
   SERVER_PORT=25565
   ```

### 🎮 Fitur Bot

- ✅ **Auto Connect** ke server Aternos
- 🔄 **Auto Reconnect** jika terputus
- 🏃 **Anti-AFK** system (jump setiap menit)
- 💬 **Chat Commands**:
  - "bot status" - Cek status dan uptime
  - "bot info" - Info health dan food
- 📊 **Web Dashboard** untuk monitoring
- 💓 **Keep-alive** untuk hosting 24/7

### 🌐 Deploy untuk 24/7

#### Option 1: Replit
1. Upload project ke Replit
2. Run: `npm start`
3. Gunakan UptimeRobot untuk ping URL

#### Option 2: Railway
1. Connect GitHub repository
2. Deploy otomatis
3. Bot akan running 24/7

#### Option 3: Heroku
1. Create Heroku app
2. Deploy via Git
3. Enable dyno untuk 24/7

### 🔧 Troubleshooting

**Bot tidak connect:**
- Pastikan server Aternos online
- Cek username tidak bentrok
- Periksa versi Minecraft sesuai

**Bot sering disconnect:**
- Cek koneksi internet
- Sesuaikan RECONNECT_DELAY
- Pastikan tidak ada bot lain dengan username sama

**Keep-alive tidak jalan:**
- Cek PORT environment variable
- Pastikan tidak ada firewall blocking
- Test akses http://localhost:3000

### 📝 Commands

```bash
# Start bot with keep-alive (recommended)
npm start

# Start only bot
npm run bot

# Start only keep-alive server
npm run keep-alive
```

### 🎯 Tips Optimasi

1. **Gunakan username unik** untuk menghindari konflik
2. **Set versi Minecraft** sesuai server
3. **Monitor via web dashboard** untuk tracking
4. **Gunakan UptimeRobot** untuk ping keep-alive
5. **Check logs** secara berkala

### 🆘 Support

Jika ada masalah:
1. Cek logs di console
2. Pastikan server Aternos online
3. Restart bot jika perlu
4. Cek konfigurasi .env

---
**Status Server:** SigmaServer27.aternos.me:25565  
**Bot Ready:** ✅ Siap untuk deploy 24/7!
