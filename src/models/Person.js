const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema;

const Person = new Schema({
    role: {
       type: ObjectId,
       ref: "Role",
       required: true
    },
    name: {
        type: String,
        trim: true,
        require: true,
        maxlength: 64,
        unique: true
    },
    email: {
        type: String,
        trim: true,
        require: false,
        maxlength: 32
    },
    birthday: {
        type: String,
        trim: true,
        require: false,
        maxlength: 16
    },
});

module.exports = mongoose.model('Person', Person);