# 🕷️ Web Scraping News Automation

<p align="center">

<img src="https://img.shields.io/badge/Node.js-24.x-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-Backend-000000?style=for-the-badge&logo=express"/>
<img src="https://img.shields.io/badge/Puppeteer-Web%20Scraping-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=white"/>
<img src="https://img.shields.io/badge/Bree-Job%20Scheduler-2563EB?style=for-the-badge"/>
<img src="https://img.shields.io/badge/PM2-Process%20Manager-6F42C1?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Nodemailer-Email-16A34A?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Winston-Logging-F59E0B?style=for-the-badge"/>
<img src="https://img.shields.io/badge/License-MIT-orange?style=for-the-badge"/>

</p>

A lightweight **Node.js** application that automatically scrapes the latest news from an online news portal using **Puppeteer**, stores the extracted information locally, and sends the results via email.

The application runs scheduled scraping jobs using **Bree**, manages background execution with **PM2**, prevents duplicate entries, and logs application activity using **Winston**.

---

# ✨ Features

- ✅ Automatically scrapes the latest news article
- ✅ Extracts article title, content and featured image
- ✅ Stores data in a local JSON file
- ✅ Prevents duplicate news entries
- ✅ Sends scraped data via email
- ✅ Scheduled background jobs
- ✅ Application logging
- ✅ Modular and maintainable project architecture

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime |
| Puppeteer | Browser automation & Web Scraping |
| Bree | Job Scheduler |
| PM2 | Process Manager |
| Nodemailer | Email Automation |
| Winston | Logging |
| Dotenv | Environment Variables |

---

# 📂 Project Structure

```text
.
├── jobs/
│   └── getNews.js
│
├── src/
│   ├── index.js
│   ├── script.js
│   ├── utils.js
│   └── mail.js
│
├── utils/
│   └── logger.js
│
├── news.json
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/web-scraping-news.git
```

Navigate to the project

```bash
cd web-scraping-news
```

Install dependencies

```bash
npm install
```

Create a `.env` file and configure your environment variables.

---

# ▶️ Running the Application

Run normally

```bash
npm start
```

Run with PM2

```bash
npm run pm2
```

View logs

```bash
npm run logs
```

---

# 🔄 Workflow

```text
Scheduler (Bree)
        │
        ▼
Start Job
        │
        ▼
Launch Puppeteer
        │
        ▼
Open News Website
        │
        ▼
Extract Latest Article
        │
        ▼
Check for Duplicates
        │
        ▼
Save JSON File
        │
        ▼
Send Email
        │
        ▼
Write Logs
```

---

# 🚀 Future Improvements

- MongoDB/PostgreSQL integration
- Multi-source news scraping
- REST API
- Docker support
- Unit & Integration Tests
- CI/CD with GitHub Actions

---

# 📖 What I Learned

This project helped me gain practical experience with:

- Web Scraping using Puppeteer
- Browser Automation
- Asynchronous JavaScript
- Scheduled Background Jobs
- Email Automation
- Logging & Error Handling
- Modular Node.js Architecture
- Process Management with PM2

---

# 👨‍💻 Author

**Eda Isaku**

If you found this project useful, consider giving it a ⭐ on GitHub.
