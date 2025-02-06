import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MONGO DB CONNECTED");
    } catch (error) {
        console.log("MONGO CONNECTION FAIL", error);
        process.exit(1);
    }
}

export default connectDB;