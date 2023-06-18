const mongoose = require("../db/Conn");
const { Schema } = mongoose;

// Define o modelo "User" utilizando o Mongoose.
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
    })
);

// Exporta o modelo "User" para uso em outros módulos.
module.exports = User;