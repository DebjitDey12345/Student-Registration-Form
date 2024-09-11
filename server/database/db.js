import mongoose from "mongoose";

const Connection = async() =>{
    const URL = `mongodb+srv://debjitdey2021:DSZ0iJrDyylk2Vy2@cluster0.oe7yf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL)
        console.log("DB Connected")
    }catch(error){
        console.log("Error While Connecting Database", error)
    }
}

export default Connection


