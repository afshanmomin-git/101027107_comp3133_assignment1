const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        trim: true,
        unique: true,
        lowercase: true,
    },
    firstname: {
        type: String,
        required: [true, 'Please add a firstname'],
        trim: true,
    },
    lastname: {
        type: String,
        required: [true, 'Please add a lastname'],
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minLength: 6,
        match: [/^[A-Za-z0-9#$&_]+$/, 'Password must be min 6 characters length and can contain only upper/lower alphabets, 0-9, #, $, &, _'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email address'],
        trim: true,
        unique: true,
        validate : function(email) {
            var Regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return Regex.test( email );
        }
    },
    type: {
        type: String,
        required: [true, 'Please add a type'],
        enum : ['customer', 'admin'],
        lowercase   : true,
    }


});

const User = mongoose.model('User', UserSchema);
module.exports = User;
