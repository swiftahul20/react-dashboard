const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regSchema = new Schema({
    first_name: {
        type: String,
        default: null
    },
    last_name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model("register", regSchema);