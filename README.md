# 🧠 NeuraBlog – MERN Stack Blogging Platform

NeuraBlog is a **full-stack blogging platform** built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
It allows users to read blogs and interact via comments, while admins can securely manage blogs, categories, and comments through a dedicated dashboard.

This project demonstrates real-world **CRUD operations, authentication, admin panel workflows, and clean UI design**.

---

## 🚀 Live Features

### 🌐 Public (User Side)
- Browse all published blogs
- Filter blogs by category (Technology, Startup, Lifestyle, Finance, etc.)
- Search blogs by title
- View full blog details
- Read approved comments
- Share blogs on social media
- Subscribe via email (UI ready)

---

### 🔐 Admin Panel
- Secure admin login
- Dashboard analytics:
  - Total blogs
  - Total comments
  - Draft count
- Add new blogs with:
  - Title & subtitle
  - Rich text editor
  - Thumbnail upload
  - Category selection
  - Publish / Draft option
- Blog management:
  - View all blogs
  - Publish / Unpublish blogs
  - Delete blogs
- Comment moderation:
  - Approve / unapprove comments
  - Delete comments

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Rich Text Editor
- CSS / Modern UI Design

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt.js
- Express Validator

### Database
- MongoDB (NoSQL)

---

## 📂 Project Structure

NeuraBlog/
│
├── client/ # React frontend
│ ├── components/
│ ├── pages/
│ ├── services/
│ └── App.js
│
├── server/ # Node + Express backend
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middlewares/
│ └── server.js
│
└── README.md

---

---

## 🔑 Authentication Flow

- Admin login uses **JWT (JSON Web Token)**
- Token stored securely on client side
- Protected routes for admin dashboard
- Unauthorized users cannot access admin routes

## 🔑 Authentication Flow

- Admin login uses **JWT (JSON Web Token)**
- Token stored securely on client side
- Protected routes for admin dashboard
- Unauthorized users cannot access admin routes

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Aksham-rana/NeuraBlog.git
cd NeuraBlog

### 2️⃣ Backend Setup
```bash
cd server
npm install

Create a .env file inside server/:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run backend:
```bash
npm star

3️⃣ Frontend Setup
```bash
cd client
npm install
npm run dev

---

## 🎯 Future Improvements

User authentication (login/signup)

Like & bookmark blogs

Role-based access (Admin / Editor)

Pagination & infinite scrolling

SEO optimization

Cloud image storage (Cloudinary / S3)

---

👨‍💻 Author

Aksham Rana
Frontend & MERN Stack Developer
📍 India


LinkedIn: https://www.linkedin.com/in/aksham-rana-63729a23b/
