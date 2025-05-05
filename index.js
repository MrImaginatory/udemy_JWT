import dotenv from 'dotenv/config'
import { app } from './app.js';
import connectDB from "./constants/database.js";

const port = process.env.PORT;

connectDB()
.then(()=>{
    console.log('Database Connected Successfully From index.js');
    app.listen(port,()=>{
        console.log(`Server Up and Running at: ${port}`);
    })
})
.catch((err)=>{
    console.log('Error Connecting Database & starting Server:',err);
})