import express from 'express';
import cors from 'cors';
import { connectDB } from './db.js';
import productRouter from './routes/product.routes.js';

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Product service!' });
});

app.get("/products", productRouter);

// Start server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});