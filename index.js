const express = require('express')
const app = express()
const port = 8080
const cors=require("cors")

const {dbconnection}=require("./config/db")
const {userRoute}=require("./routes/user.route")
const {todoRoute}=require("./routes/todo.route")


app.use(cors({
    origin:"*"
}))

app.use(express.json())

app.use("/todo",todoRoute)
app.use("/user",userRoute)
app.get('/', (req, res) => res.send('Hello World!'))



app.listen(port, async() =>{ 
    
    
   try{
    dbconnection
    console.log({"msg":"connected to database"})
   }catch(err){
    console.log(err)
   }


    console.log(`Example app listening on port ${port}!`)})