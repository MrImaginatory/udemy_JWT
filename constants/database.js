import mongoose from "mongoose";

const MongoUri = process.env.MONGO_URI;
const Database = process.env.DATABASE;

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${MongoUri}/${Database}`);
    } catch (error) {
        console.log("Error Connecting db:",error);
        throw error;
    }
}

export default connectDB