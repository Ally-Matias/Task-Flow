const mongoose = require("../db/Conn");
const { Schema } = mongoose;

const User = mongoose.model(
    'user',
    new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
    }, {
        timestamps: true
    }),

);

module.exports = User;