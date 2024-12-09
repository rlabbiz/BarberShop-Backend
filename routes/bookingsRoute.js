import express from 'express';
import {
    getBookings,
    addBookings,
} from '../controllers/bookingsController.js';


// Create an instance of express.Router
export const router = express.Router();

// Define the routes for /api/bookings
router.route('/')
    .get(getBookings)
    .post(addBookings)

