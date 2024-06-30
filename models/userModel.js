const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/testApp");

const userSchema = mongoose.Schema({
    imageUrl: String,
    email: String,
    name: String
});

module.exports=mongoose.model("user",userSchema)