const mongoose=require("mongoose")
const userScema=mongoose.Schema({
    email:String,
    password:String,
    IPAddress:String
})

const UserModel=mongoose.model("user",userScema)
module.exports={UserModel}