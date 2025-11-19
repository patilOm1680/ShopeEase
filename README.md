# 🛒 ShopeEase || Ecommerce Web App

ShopeEase is an E-commerce web application built using **React**, **Redux Toolkit**, and **Vite**. It provides a clean UI, product browsing, cart management, and a modular structure suitable for scaling into a full-featured shopping platform.

![App Screenshot](./src/assets/screenShots/HomeSS.png)

## 📖 Table of Contents
- Introduction
- Features
- Project Structure
- Tech Stack
- Installation
- State Management
- API & Data Flow
- License

## 📝 Introduction
ShopeEase is designed as a lightweight online store interface where users can browse products, filter them by category, view details, and manage a shopping cart.

## ✨ Features
- Product listing and filtering
- Add/remove/update cart
- Global Redux state
- Mock API data
- Reciept generation
- Mock Payment

## 📂 Project Structure

ShopeEase/
├── index.html
├── eslint.config.js
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── assets/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── ProductList.jsx
    │   ├── Cart.jsx
    │   ├── ProductCard.jsx
    │   └── ...
    ├── data/
    │   └── data.js
    ├── features/
    │   └── products/
    │       ├── ProductSlice.js
    │       └── cart/CartSlice.js
    └── store/
        └── store.js


## 🧰 Tech Stack
- React.js
- Material UI (MUI), 
- Redux Toolkit
- CSS

## ⚙️ Installation

```
git clone <your-repo-url>
cd ShopeEase
```

```
npm install
```

```
npm run dev
```

## 🗂 State Management
ProductSlice and CartSlice using Redux Toolkit.

## 🔌 API & Data Flow
Uses mock local data in src/data/data.js.

## 📄 License
No license included; can generate one upon request.



