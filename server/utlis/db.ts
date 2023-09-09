import mongoose from "mongoose";
// import { app } from "./app";
require("dotenv").config();

const dbUrl:string = process.env.DB_URL || "";

const connectDB = async () => {

    try{
        await mongoose.connect(dbUrl).then((data:any) =>{
            console.log("Database connected successfully")
        }) 
    } catch(err:any){
        console.log(err.message);
        setTimeout(connectDB,5000);
    }

}

export default connectDB;