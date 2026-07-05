# 📰 Web Scraping News Automation

A Node.js application that automatically scrapes the latest news from an online news portal, stores the extracted data in a JSON file, and sends the results via email. The project is scheduled to run automatically at fixed intervals using a job scheduler.

## 🚀 Features

- Scrapes the latest news article from the target website.
- Extracts:
  - News title
  - Article content
  - Featured image

- Stores data in a local JSON file.
- Prevents duplicate news entries.
- Automatically sends the generated JSON file via email.
- Runs automatically every 5 minutes.
- Includes logging for monitoring application activity.

## 🛠️ Tech Stack

- **Node.js**
- **JavaScript (ES Modules)**
- **Puppeteer** – Browser automation and web scraping
- **Nodemailer** – Email delivery
- **Bree** – Job scheduler
- **PM2** – Process management
- **Winston** – Logging
- **dotenv** – Environment variable management

## 📁 Project Structure

```
.
├── jobs/
│   └── getNews.js
├── src/
│   ├── index.js
│   ├── script.js
│   ├── mail.js
│   └── utils.js
├── utils/
│   └── logger.js
├── news.json
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/web-scraping.git
```

Navigate into the project:

```bash
cd web-scraping
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure your email credentials and any required environment variables.

## ▶️ Running the Application

Start the application:

```bash
npm start
```

The scheduler will automatically execute the scraping job every **5 minutes**.

## 📌 Workflow

1. Launches a browser using Puppeteer.
2. Navigates to the target news website.
3. Extracts the latest article.
4. Checks whether the article already exists.
5. Saves new data to `news.json`.
6. Sends the JSON file via email.
7. Logs all important events.

## 📈 Possible Improvements

- Store data in a database (MongoDB or PostgreSQL).
- Support scraping from multiple news websites.
- Implement retry mechanisms for failed requests.
- Run Puppeteer in headless mode in production.
- Add unit and integration tests.
- Dockerize the application.
- Create a REST API to expose scraped data.

## 💡 What I Learned

During this project I gained practical experience with:

- Browser automation using Puppeteer
- Web scraping techniques
- Asynchronous JavaScript (async/await)
- Scheduled background jobs
- Email automation with Nodemailer
- Logging and error handling
- Project structure and modular Node.js development

## 👨‍💻 Author

**Eda Isaku**

If you found this project useful, feel free to give it a ⭐ on GitHub.

# 📰 Web Scraping News Automation

A Node.js application that automatically scrapes the latest news from an online news portal, stores the extracted data in a JSON file, and sends the results via email. The project is scheduled to run automatically at fixed intervals using a job scheduler.

## 🚀 Features

- Scrapes the latest news article from the target website.
- Extracts:
  - News title
  - Article content
  - Featured image

- Stores data in a local JSON file.
- Prevents duplicate news entries.
- Automatically sends the generated JSON file via email.
- Runs automatically every 5 minutes.
- Includes logging for monitoring application activity.

## 🛠️ Tech Stack

- **Node.js**
- **JavaScript (ES Modules)**
- **Puppeteer** – Browser automation and web scraping
- **Nodemailer** – Email delivery
- **Bree** – Job scheduler
- **PM2** – Process management
- **Winston** – Logging
- **dotenv** – Environment variable management

## 📁 Project Structure

```
.
├── jobs/
│   └── getNews.js
├── src/
│   ├── index.js
│   ├── script.js
│   ├── mail.js
│   └── utils.js
├── utils/
│   └── logger.js
├── news.json
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/web-scraping.git
```

Navigate into the project:

```bash
cd web-scraping
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure your email credentials and any required environment variables.

## ▶️ Running the Application

Start the application:

```bash
npm start
```

The scheduler will automatically execute the scraping job every **5 minutes**.

## 📌 Workflow

1. Launches a browser using Puppeteer.
2. Navigates to the target news website.
3. Extracts the latest article.
4. Checks whether the article already exists.
5. Saves new data to `news.json`.
6. Sends the JSON file via email.
7. Logs all important events.

## 📈 Possible Improvements

- Store data in a database (MongoDB or PostgreSQL).
- Support scraping from multiple news websites.
- Implement retry mechanisms for failed requests.
- Run Puppeteer in headless mode in production.
- Add unit and integration tests.
- Dockerize the application.
- Create a REST API to expose scraped data.

## 💡 What I Learned

During this project I gained practical experience with:

- Browser automation using Puppeteer
- Web scraping techniques
- Asynchronous JavaScript (async/await)
- Scheduled background jobs
- Email automation with Nodemailer
- Logging and error handling
- Project structure and modular Node.js development

## 👨‍💻 Author

**Eda Isaku**

If you found this project useful, feel free to give it a ⭐ on GitHub.

# 📰 Web Scraping News Automation

A Node.js application that automatically scrapes the latest news from an online news portal, stores the extracted data in a JSON file, and sends the results via email. The project is scheduled to run automatically at fixed intervals using a job scheduler.

## 🚀 Features

- Scrapes the latest news article from the target website.
- Extracts:
  - News title
  - Article content
  - Featured image

- Stores data in a local JSON file.
- Prevents duplicate news entries.
- Automatically sends the generated JSON file via email.
- Runs automatically every 5 minutes.
- Includes logging for monitoring application activity.

## 🛠️ Tech Stack

- **Node.js**
- **JavaScript (ES Modules)**
- **Puppeteer** – Browser automation and web scraping
- **Nodemailer** – Email delivery
- **Bree** – Job scheduler
- **PM2** – Process management
- **Winston** – Logging
- **dotenv** – Environment variable management

## 📁 Project Structure

```
.
├── jobs/
│   └── getNews.js
├── src/
│   ├── index.js
│   ├── script.js
│   ├── mail.js
│   └── utils.js
├── utils/
│   └── logger.js
├── news.json
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/web-scraping.git
```

Navigate into the project:

```bash
cd web-scraping
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure your email credentials and any required environment variables.

## ▶️ Running the Application

Start the application:

```bash
npm start
```

The scheduler will automatically execute the scraping job every **5 minutes**.

## 📌 Workflow

1. Launches a browser using Puppeteer.
2. Navigates to the target news website.
3. Extracts the latest article.
4. Checks whether the article already exists.
5. Saves new data to `news.json`.
6. Sends the JSON file via email.
7. Logs all important events.

## 📈 Possible Improvements

- Store data in a database (MongoDB or PostgreSQL).
- Support scraping from multiple news websites.
- Implement retry mechanisms for failed requests.
- Run Puppeteer in headless mode in production.
- Add unit and integration tests.
- Dockerize the application.
- Create a REST API to expose scraped data.

## 💡 What I Learned

During this project I gained practical experience with:

- Browser automation using Puppeteer
- Web scraping techniques
- Asynchronous JavaScript (async/await)
- Scheduled background jobs
- Email automation with Nodemailer
- Logging and error handling
- Project structure and modular Node.js development

## 👨‍💻 Author

**Eda Isaku**

If you found this project useful, feel free to give it a ⭐ on GitHub.
