const mongoose =require("mongoose")
require("dotenv").config()
mongoose.set('strictQuery', false)
let dbconnection =mongoose.connect(process.env.db_url)
module.exports={dbconnection}

