const {UserModel}=require("../models/user.model")

const signupcheck =async(req, res,next)=>{
    const {email,password}=req.body
if(!email || !password)return res.status(400).send({"msg":"wrong creadendials"})
const isPresent= await UserModel.find({email:email})

if(isPresent.length>0)return res.status(400).send({"msg":"User already exist please login"})
const ipAddress = req.header('x-forwarded-for') ||  			
req.socket.remoteAddress;
req.body. IPAddress=ipAddress
next()


}

module.exports={signupcheck}