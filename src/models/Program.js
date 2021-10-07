const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { isNumber } = require('util');
const { ObjectId } = Schema;

const Program = new Schema({
    announcer: [{
       type: ObjectId,
       ref: "Person",
       required: true
    }],
    moderator: {
        type: ObjectId,
        ref: "Person",
        required: true
     },
    name: {
        type: String,
        required: true
    },
    day: {
        type: Number,
        required: true,
    },
    hourIni: {
        type: Number,
        required: true,
    },
    hourFin: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true
    },
    moderatorReport: {
        type: String,
        required: false
    },
    announcerReport: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Program', Program);