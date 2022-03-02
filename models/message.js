const mongoose = require('mongoose')


const messageSchema = new mongoose.Schema({
    messageSisu: {
        type: String,
        required: true,
        maxlength: 100,
    },
});

const Message = mongoose.model("messages", messageSchema)

module.exports = Message;