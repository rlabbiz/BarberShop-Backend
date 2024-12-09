import connect from './config/connect.js';
import express from 'express';
import cors from 'cors';
import { router } from './routes/bookingsRoute.js';
import { errorHandlerMiddleware as errorHan } from './middlewares/errorHandlerMiddleware.js';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

const PORT = process.env.PORT || 5000;

connect();

// Create an instance of express
const app = express();

// Middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON data, so we can access it in req.body
app.use(express.json());

// Use the router for all routes starting with /api/bookings
app.use('/api/bookings/', router)

// Middleware to handle errors
app.use(errorHan)

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})
