import express from "express";
import httpProxy from "express-http-proxy";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

// Microservice URLs (you can load these from env vars later)
const AUTH_SERVICE = "http://localhost:4000";
const ORDERS_SERVICE = "http://localhost:6000";
const PRODUCTS_SERVICE = "http://localhost:5000";

// Public routes (no auth required)
router.use("/auth", httpProxy(`${AUTH_SERVICE}/auth`));

// Protected routes (require JWT)
router.use("/orders", authenticateUser, httpProxy(`${ORDERS_SERVICE}/orders`));
router.use("/products", authenticateUser, httpProxy(`${PRODUCTS_SERVICE}/products`));

export default router;
