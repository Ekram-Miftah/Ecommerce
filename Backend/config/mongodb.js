import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log("Db Connected Bismillah");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`); 

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
};

export default connectDB;
