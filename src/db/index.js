import mongoose from "mongoose";
import { DB_NAME } from "../constaints.js";

const connectDb = async ()=> {

    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB Connected !! DB Host:${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("error server is failed:", error);
        process.exit(1);
    }
}

export default connectDb;