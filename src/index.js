import mongoose from 'mongoose';
import { DB_NAME } from './contants';

import express from 'express';
const app = express();

( async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error',(error)=>{
            console.log("ERRR: ",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listning on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error('ERROR:', error);
        throw error;
    }
} )()