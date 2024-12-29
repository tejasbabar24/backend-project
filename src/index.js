// require('dotenv').config({path : './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from './app.js'

dotenv.config({
   path : './env' 
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3001, ()=>{
        console.log(` server is running at  PORT : ${process.env.PORT || 3001}`);
        
    })
    app.on('error' , (error)=>{
        console.log("Error :",error);
        throw error       
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed  !!!" , err);
    
})