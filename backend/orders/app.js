import express from 'express';
import cors from 'cors';
import orderRouter from './routes/order.routes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Order service!' });
});

app.use("/orders", orderRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});