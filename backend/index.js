import express from "express"
import dotenv from "dotenv"
import db from "./config/Database.js"
import router from "./routes/index.js";
import Users from "./models/Usermodel.js";
import cors from "cors"

import cookieParser from "cookie-parser";


dotenv.config()





const app= express();


try{
    await db.authenticate();
    console.log("Database successfully connected");
    // await Users.sync();
}

catch(error){
    console.log(error);
}

app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(5000,()=> console.log("Server started at port 5000"))