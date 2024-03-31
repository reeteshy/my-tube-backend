import mongoose from "mongoose";
import {DATABASE_NAME} from '../constants.js'
// import express from "express";
import 'dotenv/config'

// const app = Express();

const connectDB = async () => {

    try {
        console.log("process.env.MONGO_DB_URI ", `${process.env.MONGO_DB_URI}/${DATABASE_NAME}`)
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DATABASE_NAME}`)
       console.log("MongoDB connected successfully!")
    
    } catch (error) {
        console.log("Database Error : ", error)
        process.exit(1)
    }
}

export default connectDB;