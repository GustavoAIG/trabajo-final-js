import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://gustavoa:alonso21@cluster0.bsm5i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log(">>> DB is connected")
    } catch (error) {
        console.log(error);
    }
}