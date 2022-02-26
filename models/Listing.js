const mongoose = require('mongoose');

const ListingSchema = mongoose.Schema({
    listing_id: {
        type: String,
        trim: true,
        required:true,
        unique: true,
    },
    listing_title: {
        type: String,
        required: [true, 'Title is required'],

    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxLength: 1000,
    },
    street: {
        type: String,
        required: [true, 'Please add a street'],
    },
    city: {
        type: String,
        required: true,
    },
    postal_code: {
        type: String,
        required: [true, 'Please add a postal code'],
        uppercase: true,
        match: [/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/, 'Please fill a valid postal code'],
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
        min: 0,
    },
   email: {
        type: String,
        required: [true, 'Please add an email address'],
        trim: true,
        unique: true,
        validate : function(email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test( email );
        }
    },
    username: {
        type: String,
        required: [true, 'Please add a username'],
        trim: true,
        unique: true,
    },
});
const Listing = mongoose.model('Listing', ListingSchema);
module.exports = Listing;

        
