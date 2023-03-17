const mongoose = require('mongoose');

const Participant = mongoose.model('Participant', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
   email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
    },
    bio: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
        }
}));

exports.Participant = Participant;