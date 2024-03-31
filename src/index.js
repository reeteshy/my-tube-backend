// due to inconsistance
// require('dotenv').config({path: './env'})

// import mongoose from "mongoose";
// import DATABASE_NAME from './constants.js'
import express from 'express'
import connectDB from "./db/index.js";

connectDB()

const app = express()


// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGO_DB_URI}/${DATABASE_NAME}`)
//        app.on("error", (error)=>{
// console.log("Error : ", error)
// throw error;
//        })

//        app.listen(process.env.PORT, ()=>{
//         console.log("App is listening on port ", process.env.PORT)
//        })
//     } catch (error) {
//         console.log("Connection Error ", error)
//         throw error
//     }
// })()