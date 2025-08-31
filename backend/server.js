import express from 'express'
import "dotenv/config"
import cors from "cors"
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from './controllers/clerkWebHooks.js';
connectDB();
const app = express();
app.use(cors());

//middleware
app.use(express.json());

//clerk middlewre
app.use(clerkMiddleware());

app.use("/api/clerk", clerkWebhooks);

app.get('/',(req,res)=> res.send("API Is Working"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));