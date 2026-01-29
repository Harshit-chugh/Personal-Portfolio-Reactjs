# 🚀 Personal Portfolio Website

A modern, responsive **personal portfolio website** built with **React (Vite)** on the frontend and a **Node.js + Express backend** to handle contact form submissions via email using **Nodemailer**.

This project showcases my skills, projects, and provides a fully working contact form that sends emails directly to my inbox.

---

## 🌐 Live Links

* **Frontend (Vercel):** [https://personal-portfolio-reactjs-cgfy.vercel.app](https://personal-portfolio-reactjs-cgfy.vercel.app)
* **Backend (Node + Express):** Deployed separately (Render / Railway / cyclic)

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Lucide Icons
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js
* Nodemailer
* CORS
* dotenv

### Deployment

* **Frontend:** Vercel
* **Backend:** Render (recommended)

---

## ✨ Features

* Modern & responsive UI
* Fully functional contact form
* Email notifications using Nodemailer
* Secure environment variables
* Clean project structure
* Mobile-friendly design

---

## 📂 Project Structure

```
Personal-Portfolio/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

### 3️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

Backend will run on:

```
http://localhost:5000
```

---

## 🔐 Environment Variables (Backend)

Create a `.env` file inside the **backend** folder:

```env
PORT=5000
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-gmail-app-password
```

⚠️ **Important:**

* Use a **Gmail App Password**, not your Gmail login password
* Enable 2‑Step Verification in Gmail before creating the app password

---

## 📬 Contact Form API

### Endpoint

```
POST /api/contact
```

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I want to work with you!"
}
```

### Response

```json
{
  "message": "Email sent successfully"
}
```

---

## 🌍 Deployment Guide

### Frontend (Vercel)

1. Push frontend code to GitHub
2. Import repo into Vercel
3. Set build command:

```bash
npm run build
```

4. Set output directory:

```bash
dist
```

---

### Backend (Render)

1. Create a **Web Service** on Render
2. Root directory: `backend`
3. Build command:

```bash
npm install
```

4. Start command:

```bash
npm start
```

5. Add environment variables in Render dashboard

---

## 🧪 Common Issues & Fixes

### ❌ Failed to fetch

* Backend not deployed or wrong API URL
* CORS not configured correctly

### ❌ Server did not return JSON

* API endpoint mismatch
* Hitting `/` instead of `/api/contact`

---

## 👨‍💻 Author

**Harshit**
Frontend Developer | React | JavaScript

📧 Email: [harshitchugh1423@gmail.com](mailto:harshitchugh1423@gmail.com)

---

## ⭐ Support

If you like this project, please ⭐ the repository — it helps a lot!

---

Happy Coding 🚀
