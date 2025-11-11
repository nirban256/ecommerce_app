import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes.js';
import { connectDB } from "./db.js";

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Authentication service!' });
});

app.use("/", authRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});