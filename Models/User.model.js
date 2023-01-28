const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type:String, required: true},
    category:{type:String,required: true},
    level: {type:String,required: true},
    questions: {type:String,required: true},
})

const UserModel = mongoose.model("user",userSchema)

module.exports= UserModel;

// name:"",
// category:"",
// level:"",
// questions:"",