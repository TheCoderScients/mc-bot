# 🚀 Panduan Deploy Bot 24/7 ke Cloud

## 🌟 **Option 1: Replit (Recommended - GRATIS)**

### **Langkah-langkah:**

1. **Buat Akun Replit**
   - Daftar di [replit.com](https://replit.com)
   - Login dengan akun GitHub/Google

2. **Upload Project**
   - Klik "Create Repl"
   - Pilih "Import from GitHub" atau "Upload folder"
   - Upload semua file dari folder "Bot Server 247"

3. **Set Environment Variables**
   - Di Replit, buka tab "Secrets" (ikon kunci)
   - Tambahkan:
     ```
     BOT_USERNAME=Bot24_7
     SERVER_HOST=SigmaServer27.aternos.me
     SERVER_PORT=25565
     AUTH_TYPE=offline
     PORT=3000
     ```

4. **Run Bot**
   - Klik tombol "Run"
   - Bot akan otomatis start dengan `npm start`

5. **Setup Always-On (Penting!)**
   - Copy URL Replit kamu (misal: https://bot247-username.replit.app)
   - Daftar di [UptimeRobot.com](https://uptimerobot.com) (gratis)
   - Buat monitor HTTP dengan URL Replit
   - Set interval 5 menit
   - UptimeRobot akan ping bot setiap 5 menit agar tetap hidup

---

## 🚄 **Option 2: Railway (Gratis $5/bulan)**

### **Langkah-langkah:**

1. **Persiapan GitHub**
   - Push project ke GitHub repository
   - Pastikan ada file `.gitignore`

2. **Deploy ke Railway**
   - Daftar di [railway.app](https://railway.app)
   - Connect GitHub account
   - Deploy from repository
   - Railway otomatis detect Node.js

3. **Set Environment Variables**
   - Di Railway dashboard, buka "Variables"
   - Tambahkan environment variables yang sama

4. **Custom Domain (Optional)**
   - Railway provide domain gratis
   - Bot langsung 24/7 tanpa perlu UptimeRobot

---

## ☁️ **Option 3: Render (Gratis dengan Batasan)**

### **Langkah-langkah:**

1. **Deploy dari GitHub**
   - Daftar di [render.com](https://render.com)
   - Connect repository
   - Pilih "Web Service"

2. **Konfigurasi Build**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node

3. **Set Environment Variables**
   - Tambahkan semua environment variables

⚠️ **Catatan:** Render gratis sleep setelah 15 menit idle, perlu UptimeRobot

---

## 🔧 **Option 4: VPS (Berbayar tapi Powerful)**

### **Rekomendasi VPS Murah:**
- **DigitalOcean:** $4/bulan
- **Vultr:** $2.50/bulan  
- **Linode:** $5/bulan

### **Setup VPS:**
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone project
git clone <your-repo>
cd bot-server-247

# Install dependencies
npm install

# Install PM2 for process management
npm install -g pm2

# Start bot with PM2
pm2 start bot-with-keepalive.js --name minecraft-bot

# Save PM2 configuration
pm2 save
pm2 startup
```

---

## 🤖 **Setup UptimeRobot (Untuk Replit/Render)**

1. **Daftar UptimeRobot**
   - Gratis untuk 50 monitors
   - Bisa ping setiap 5 menit

2. **Buat Monitor**
   - Type: HTTP(s)
   - URL: URL bot kamu
   - Monitoring Interval: 5 minutes
   - Alert Contacts: Email kamu

3. **Test Monitor**
   - UptimeRobot akan ping `/health` endpoint
   - Bot akan tetap hidup 24/7

---

## 📊 **Perbandingan Platform**

| Platform | Harga | Uptime | Setup | Rekomendasi |
|----------|-------|--------|-------|-------------|
| **Replit** | Gratis* | 99%+ | Mudah | ⭐⭐⭐⭐⭐ |
| **Railway** | $5/bulan | 99.9% | Mudah | ⭐⭐⭐⭐ |
| **Render** | Gratis* | 95% | Mudah | ⭐⭐⭐ |
| **VPS** | $2-5/bulan | 99.9% | Susah | ⭐⭐⭐⭐ |

*Dengan UptimeRobot

---

## ✅ **Rekomendasi Final**

**Untuk Pemula:** Gunakan **Replit + UptimeRobot**
- 100% gratis
- Setup mudah
- Reliable untuk bot Minecraft

**Untuk Advanced:** Gunakan **Railway** atau **VPS**
- Lebih stabil
- Tidak perlu UptimeRobot
- Better performance

---

## 🔍 **Troubleshooting**

### **Bot Sering Disconnect di Cloud:**
- Pastikan server Aternos online
- Cek environment variables
- Monitor logs di platform

### **UptimeRobot Tidak Berfungsi:**
- Pastikan URL correct
- Test manual ping ke `/health`
- Cek interval tidak terlalu sering

### **Platform Sleep/Idle:**
- Setup UptimeRobot dengan benar
- Pastikan `/ping` endpoint aktif
- Monitor uptime statistics

Bot akan berjalan 24/7 di cloud tanpa bergantung pada perangkat lokal! 🎉
