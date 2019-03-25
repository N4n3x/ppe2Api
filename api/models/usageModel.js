'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UsageSchema = new Schema({
    start: {
        type: Date,
        require: true
    },
    end: {
        type: Date,
        require: true
    },
    disable: {
        type: Boolean,
        default: false
    },
    description: {
        type: String
    },
    purpose: {
        type: String
    },
    km: {
        type: Number
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehicle'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }   
});

module.exports = mongoose.model('Usage', UsageSchema);