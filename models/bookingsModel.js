import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    }
})

export default mongoose.model('Booking', bookingSchema)