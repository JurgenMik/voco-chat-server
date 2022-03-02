const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const MessageModel = require("./models/message");

app.use(express.json()); // recieve information from front-end in json format
app.use(cors());  //  {package} connection to front end using created api

mongoose.connect("mongodb+srv://jurgen:Lollakas123@vocochat.llr97.mongodb.net/chat?retryWrites=true&w=majority",
    { // connection url - represents what mongodb are we trying to connect to
    useNewUrlParser: true,
     }
  );

app.post("/insert", async (req, res) => {

    const sonum = req.body.sonum; // catch request
    const user = req.body.user; // catch request

    const message = new MessageModel({messageSisu: sonum, kasutaja: user});

    try{

       await message.save();
       res.send("inserted data")

    } catch(err){
       console.log(err);
    }
});

app.listen(3001, ()=> {
    console.log('Sever running on port 3001...');
});