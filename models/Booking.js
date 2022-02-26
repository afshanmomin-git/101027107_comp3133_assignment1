const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    listing_id: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    booking_id: {
        type: String,
        required: true,
        trim: true,
        unique: true,

    },  
    booking_date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    booking_start: {
        type: Date,
        required: true
    },
    booking_end: {
        type: Date,
        required: true
    },
    username: {
        type: String,
        required: true,

    }
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking;