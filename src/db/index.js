import express from "express"
import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

// const DB_NAME = process.env.DB_NAME


const connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
      console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("ERROR: ", error)
        console.log("DATABASE CONNECTION ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB