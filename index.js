const express = require("express");
const mongoose = require("mongoose");
const app = express();


const MessageModel = require("./models/message");

app.use(express.json()); // recieve information from front-end in json format

mongoose.connect("mongodb+srv://jurgen:Lollakas123@vocochat.llr97.mongodb.net/chat?retryWrites=true&w=majority",
    { // connection url - represents what mongodb are we trying to connect to
    useNewUrlParser: true,
     }
  );

app.get("/", async (req, res) => {
   const message = new MessageModel({messageSisu: "Tervist"});

    try{

       await message.save();

    } catch(err){
       console.log(err);
    }
});

app.listen(3001, ()=> {
    console.log('Sever running on port 3001...');
});