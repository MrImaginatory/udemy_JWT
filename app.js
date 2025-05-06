import express from 'express';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json())

app.use('/auth',authRouter)
app.use(cookieParser());

export {app}