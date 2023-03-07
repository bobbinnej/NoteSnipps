import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import snippRoutes from './routes/snippRoute.js';


// configurations
dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/notes', snippRoutes);

// mongoose setup
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT, ()=>console.log(`Server is running on port: ${PORT}`));
}).catch((error)=>console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);