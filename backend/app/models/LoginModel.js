const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const logSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    accessToken: {
        type: String,
        default: null
    },
    refreshToken: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model("login", logSchema);