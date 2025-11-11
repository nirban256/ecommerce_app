import express from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../schema/users.schema.js";

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.json({ message: "All the fields are required" });

        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ error: `User with email ${email} already exists` });

        const hashedPassword = await bcryptjs.hash(password, 10);
        await User.create({
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User created successfully",
        });
    } catch (error) {
        console.error("Error while signing up", error);
        res.status(500).send("Error signing up!");
    }
});

authRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET || "default_secret",
            { expiresIn: "15m" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Error while logging in:", error);
        res.status(500).json({ error: "Error logging in!" });
    }
});


export default authRouter;