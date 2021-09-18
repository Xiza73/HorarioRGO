const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const Role = new Schema({
    name: {
        type: String,
        trim: true,
        require: true,
        maxlength: 32,
        unique: true
    }
});

module.exports = mongoose.model('Role', Role);