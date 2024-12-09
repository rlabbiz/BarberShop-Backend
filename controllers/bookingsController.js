import asyncHandler from 'express-async-handler'
import Bookings from '../models/bookingsModel.js'

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Public
export const getBookings = asyncHandler(async (req, res) => {
    try {
        const bookings = await Bookings.find()

        if (bookings) {
            res.status(200).json(bookings)
        } else {
            res.status(404)
            throw new Error('Bookings not found')
        }
    } catch (error) {
        res.status(404)
        throw new Error('Bookings not found')
    }
})


// @desc    Add a booking
// @route   POST /api/bookings
// @access  Public
export const addBookings = asyncHandler(async (req, res) => {
    const { date, hour, name, phone } = req.body

    if (!date || !hour || !name || !phone) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    const booking = new Bookings({
        date,
        hour,
        name,
        phone
    })

    const createdBooking = await booking.save()
    
    res.status(201).json(createdBooking)
})