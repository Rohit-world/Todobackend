const mongoose=require("mongoose")
let todoScema=mongoose.Schema({
taskname :String,
status:String ,
tag:String,
userID:String
})

const TodoModel=mongoose.model("todo",todoScema)

module.exports={TodoModel}