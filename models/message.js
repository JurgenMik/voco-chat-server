const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    messageSisu: {

        type: String,
        required: true,
        maxlength: 100,
    },
    kasutaja: {

        type: String,
        required: true,
    },
});

const Message = mongoose.model("messages", messageSchema)

module.exports = Message;