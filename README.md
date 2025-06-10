# 📦 NoteBook

# Full-Stack CRUD Application (Next.js + Laravel)

A full-featured CRUD application with a clean API-based architecture.  
Frontend is built with **Next.js** and backend is powered by **Laravel**, organized in separate folders.

---

## 📝 Overview

This project demonstrates a simple **Create, Read, Update, Delete (CRUD)** functionality using modern web technologies.  
The frontend is built using **Next.js**, and the backend RESTful API is powered by **Laravel**.

---

## 📁 Project Structure 

notebook/
│
├── frontend/ # Next.js application
└── backend/ # Laravel 


## ✨ Features

- User-friendly interface with Next.js & Tailwind CSS
- RESTful API using Laravel
- Fully functional CRUD operations
- Form validation
- Responsive design
- Axios or Fetch integration

---

## 🛠️ Tech Stack

**Frontend:**
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)

**Backend:**
- [Laravel](https://laravel.com/)
- [MySQL](https://www.mysql.com/)

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/MohammadR3Z4/notebook.git
cd notebook

### 🖥️ Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev

### 🖥️ Backend (Laravel)

cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve