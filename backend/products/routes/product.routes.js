import express from "express";
import { authenticateUser } from "../middleware/authMiddleware.js";
import { Product } from "../schema/product.schema.js";

const productRouter = express.Router();

productRouter.post("/getProduct", authenticateUser, async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;

        if (!name || !price || !category || !stock) return res.json({ message: "All the fields are required" });

        const product = new Product({ name, description, price, category, stock });
        await product.save();

        res.status(201).json(product);
    } catch (error) {
        console.error("Error while fetching all orders", error);
        res.status(500).send("Error getting all orders!");
    }
});

export default productRouter;