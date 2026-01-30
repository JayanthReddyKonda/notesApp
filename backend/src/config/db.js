import mongoose from 'mongoose'

const mongoUri = process.env.MONGO_URI;

export const connectDB = async ()=>{
    try {
        await mongoose.connect(mongoUri);
        console.log("DB Connected Succesfully");
    } catch (error) {
        console.error("Error Connecting to DB",error)
    }
}