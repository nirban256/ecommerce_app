import express from "express";
import { PrismaClient } from "@prisma/client";
import { authenticateUser } from "../middleware/authMiddleware.js";

const orderRouter = express.Router();
const prisma = new PrismaClient();

orderRouter.get("/getOrders", authenticateUser, async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            where: {
                customerId: req.user.userId
            },
        });

        res.status(200).json(orders);
    } catch (error) {
        console.error("Error while fetching all orders", error);
        res.status(500).send("Error getting all orders!");
    }
});

export default orderRouter;