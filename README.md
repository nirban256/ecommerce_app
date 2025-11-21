# 📦 Distributed E-Commerce System (React + TailwindCSS + Microservices)

This project is a **distributed system–based e-commerce application UI** built using:

- React + Vite  
- TailwindCSS v4  
- Microservices Architecture  
- API Gateway Layer  

The goal of this project is to demonstrate how a front-end application interacts with four distributed backend services: **API Gateway**, **Authentication**, **Products**, and **Orders**.

---

## 🚀 Features

### 🔹 Microservices Used

#### 1. API Gateway Service
- Acts as the single entry point for all requests.  
- Routes API calls to the appropriate backend microservice.  
- Handles authorization forwarding, throttling, and routing logic.

#### 2. Authentication Service
- Manages user signup, login, and session verification.  
- Issues JWT tokens.  
- Protects secured routes and ensures identity validation.

#### 3. Products Service
- Manages the product catalog.  
- Provides product listing, product details, and inventory data.  
- Scalable and independent from other services.

#### 4. Orders Service
- Handles order creation and checkout flows.  
- Validates stock with the Products Service.  
- Verifies user identity with the Authentication Service.

---

## 🖥️ Frontend (React + Vite + TailwindCSS v4)

The frontend provides:

- A responsive, modern UI built with TailwindCSS v4.  
- A service-status dashboard showing distributed system health.  
- Product listings with clean component structure.  
- Microservice-friendly architecture for future backend integration.

---

## 📁 Project Structure (Frontend Only)

```bash
src/
│ App.jsx
│ main.jsx
│ index.css
│
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── ProductCard.jsx
│ ├── ProductList.jsx
│ ├── ServiceStatus.jsx
│ └── DistributedBanner.jsx
│
└── data/
  └──products.js
```

---

## 🧩 How the Frontend Interacts With Services

| Service        | Example Endpoint     | Description                  |
|----------------|-----------------------|------------------------------|
| API Gateway    | `/api/*`              | Centralized request handler |
| Authentication | `/auth/login`         | Login & authentication      |
| Products       | `/products`           | Fetch product data          |
| Orders         | `/orders/create`      | Create new orders           |

All frontend API calls are intended to hit the **API Gateway**, which forwards them internally to the correct service.

---

## 🏗️ Run the Frontend Locally

```bash
cd frontend/
npm install
npm run dev
```


🛠️ Technologies Used

- React JS
- Vite
- TailwindCSS v4
- JavaScript (ES Modules)
- Component-Driven UI Architecture
