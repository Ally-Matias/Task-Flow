const mongoose = require("../db/Conn");
const { Schema } = mongoose;

const Task = mongoose.model(
    'Task',
    new Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: false
        },
        user: Object,
    }, {
        timestamps: true
    }),

);

module.exports = Task;