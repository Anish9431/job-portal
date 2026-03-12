import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import { clerkWebhooks } from './controllers/webhooks.js';

// App Config
const app = express();
const PORT = process.env.PORT || 5000;

// connect to database
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json({
    verify: (req, res, buf) => {
        req.rawBody = buf.toString();
    }
}));
app.use(cors());

// API Routes
app.get('/', (req, res) => {
    res.send("API Working");
});

app.post('/webhooks', clerkWebhooks);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;