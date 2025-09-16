# 🚀 Panduan Deploy Bot 24/7 ke Replit (100% GRATIS)

## 📋 **Yang Dibutuhkan:**
- Akun Replit (gratis)
- Akun UptimeRobot (gratis)
- File project bot yang sudah ada

---

## 🎯 **LANGKAH 1: Setup Replit**

### **1.1 Buat Akun Replit**
1. Buka [replit.com](https://replit.com)
2. Klik "Sign up" 
3. Daftar dengan GitHub/Google (recommended)
4. Verifikasi email jika diminta

### **1.2 Upload Project**
1. Di dashboard Replit, klik **"Create Repl"**
2. Pilih **"Import from GitHub"** atau **"Upload files"**
3. **Jika upload files:**
   - Drag & drop semua file dari folder "Bot Server 247"
   - Atau zip folder dan upload
4. **Jika dari GitHub:**
   - Push project ke GitHub dulu
   - Paste repository URL

### **1.3 Set Environment Variables**
1. Di Replit editor, cari ikon **🔒 "Secrets"** di sidebar kiri
2. Klik "Secrets" dan tambahkan:
   ```
   Key: BOT_USERNAME
   Value: Bot24_7
   
   Key: SERVER_HOST  
   Value: SigmaServer27.aternos.me
   
   Key: SERVER_PORT
   Value: 25565
   
   Key: AUTH_TYPE
   Value: offline
   
   Key: PORT
   Value: 3000
   ```

### **1.4 Test Run Bot**
1. Klik tombol **"Run"** (hijau)
2. Replit akan otomatis jalankan `npm start`
3. Lihat console - bot harus connect ke server
4. Copy URL Replit kamu (misal: `https://bot247-username.replit.app`)

---

## 🔄 **LANGKAH 2: Setup UptimeRobot (Always-On)**

### **2.1 Buat Akun UptimeRobot**
1. Buka [uptimerobot.com](https://uptimerobot.com)
2. Klik "Sign Up Free"
3. Daftar dengan email
4. Verifikasi email

### **2.2 Buat Monitor**
1. Login ke UptimeRobot dashboard
2. Klik **"+ Add New Monitor"**
3. Isi form:
   ```
   Monitor Type: HTTP(s)
   Friendly Name: Minecraft Bot 24/7
   URL: [URL Replit kamu]/ping
   Monitoring Interval: 5 minutes
   ```
4. Klik **"Create Monitor"**

### **2.3 Test Monitor**
1. Tunggu 5 menit
2. Cek status monitor - harus "Up"
3. Jika "Down", cek URL dan pastikan bot running

---

## ✅ **LANGKAH 3: Verifikasi 24/7**

### **3.1 Test Always-On**
1. Tutup browser/komputer
2. Tunggu 30 menit
3. Buka URL Replit - bot masih jalan
4. Cek dashboard UptimeRobot - status "Up"

### **3.2 Monitor di Minecraft**
1. Join server SigmaServer27.aternos.me
2. Ketik "bot status" di chat
3. Bot harus respond dengan uptime

---

## 🛠️ **TROUBLESHOOTING**

### **Bot Tidak Connect:**
```
❌ Masalah: ECONNRESET error
✅ Solusi: 
- Pastikan server Aternos online
- Restart Repl (Stop → Run)
- Cek environment variables
```

### **Replit Sleep/Idle:**
```
❌ Masalah: Bot mati setelah beberapa jam
✅ Solusi:
- Pastikan UptimeRobot setup benar
- URL harus /ping bukan /
- Interval 5 menit (jangan lebih cepat)
```

### **UptimeRobot Down:**
```
❌ Masalah: Monitor status "Down"
✅ Solusi:
- Test manual: buka [URL]/ping di browser
- Harus return JSON response
- Restart Repl jika perlu
```

---

## 💡 **TIPS OPTIMASI**

### **1. Monitoring Multiple Endpoints**
Buat 2 monitor di UptimeRobot:
- Monitor 1: `[URL]/ping` (setiap 5 menit)
- Monitor 2: `[URL]/health` (setiap 10 menit)

### **2. Email Alerts**
Setup email notification di UptimeRobot jika bot down:
1. Go to "Alert Contacts"
2. Add email
3. Enable untuk monitor bot

### **3. Backup Strategy**
Jika Replit bermasalah:
1. Export project dari Replit
2. Deploy ke Render.com (gratis backup)
3. Update UptimeRobot URL

---

## 📊 **EXPECTED RESULTS**

### **✅ Sukses Indicators:**
- Replit console: "Bot logged in successfully!"
- UptimeRobot: Status "Up" (99%+ uptime)
- Minecraft: Bot visible di server (spectator mode)
- Dashboard: http://[replit-url] accessible

### **📈 Performance:**
- **Uptime:** 99%+ (dengan UptimeRobot)
- **Latency:** 50-200ms (tergantung lokasi)
- **Memory:** ~50MB usage
- **Cost:** $0 (100% gratis)

---

## 🎉 **SELESAI!**

Bot sekarang berjalan 24/7 di cloud tanpa biaya:
- ✅ **Replit:** Hosting gratis
- ✅ **UptimeRobot:** Keep-alive gratis  
- ✅ **Server Aternos:** Tetap online selamanya
- ✅ **Zero maintenance:** Bot auto-restart jika error

**URL Bot:** https://[username]-bot247.replit.app  
**Status Page:** https://[username]-bot247.replit.app  
**Monitoring:** UptimeRobot dashboard

Bot siap melayani server SigmaServer27 24/7! 🤖🎮
