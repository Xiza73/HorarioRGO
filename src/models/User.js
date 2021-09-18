const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema;

const User = new Schema({
    person: {
       type: ObjectId,
       ref: "Person",
       required: true,
       unique: true
    },
    user: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', User);