import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    address:String,
    pname:String,
    aadhar:Number,
    image:String,
   
})

const User = mongoose.model('sip', userSchema)

export default User