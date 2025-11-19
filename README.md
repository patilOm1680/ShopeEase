# 🛒 ShopeEase | Ecommerce Web App

ShopeEase is an E-commerce web application built using **React**, **Redux Toolkit**, and **Vite**. It provides a clean UI, product browsing, cart management, and a modular structure suitable for scaling into a full-featured shopping platform.

![App Screenshot](./public/AppScreenShots/HomeSS.png)

## 📖 Table of Contents
- [Introduction](#-introduction)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [Installation](#️-installation)
- [API](#-api)
- [Screenshots](#screenshots)
- [License](#-license)

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

```plaintext
ShopeEase/
├── index.html
├── eslint.config.js
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductList.jsx
│   │   ├── Cart.jsx
│   │   ├── ProductCard.jsx
│   │   └── ...
│   ├── data/
│   │   └── data.js
│   ├── features/
│   │   └── products/
│   │       ├── ProductSlice.js
│   │       └── cart/
│   │           └── CartSlice.js
│   └── store/
│       └── store.js
```

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


## 🔌 API
Uses Dummy API- https://dummyjson.com/products?limit=100

## Screenshots
![App Screenshot](./public/AppScreenShots/SS1.png)
![App Screenshot](./public/AppScreenShots/SS2.png)
![App Screenshot](./public/AppScreenShots/SS3.png)
![App Screenshot](./public/AppScreenShots/SS4.png)
![App Screenshot](./public/AppScreenShots/SS5.png)
![App Screenshot](./public/AppScreenShots/SS7.png)
![App Screenshot](./public/AppScreenShots/SS8.png)


## 📄 License
No license ;



