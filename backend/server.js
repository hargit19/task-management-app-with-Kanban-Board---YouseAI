import express from "express";
import api from './routes/route.js'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors';

dotenv.config();




const app = express();

const allowedOrigins = ['https://task-management-app-with-kanban-board-youse-ai-frontend.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('Not allowed by CORS'), false);
    }
    return callback(null, true);
  },
  credentials: true // If you are handling cookies or authentication
}));

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')

    next();
})

app.get("/", (req, res) => {
    res.json("Welcome");
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.use(api)

mongoose
    .connect(
        `${process.env.MONGODB_URI}`
    )
    .then(() => {
        app.listen(process.env.PORT || 9000);
    })
    .catch(err => {
        console.log(err);
    });

export default app;
