import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import todosRoutes from './routes/todos'

const app = express();
dotenv.config();

app.use(express.json({extended:true}))
app.use(express.urlencoded({extened:true}))
app.use(cors())

app.use('/todos',todosRoutes);

// mongo db

mongoose.connect("mongodb+srv://admin:qwertymong0@cluster0.jp6vr.mongodb.net/todoDatabase?retryWrites=true&w=majority").then(()=>{
    console.log("DB CONNECTED");
}).catch((e)=>{
    console.log("No DB CONNECTED");
});


// port
app.get('/',(req,res)=>{
    res.send('Welcome to server');

})


app.listen(3001, () => {
    console.log("You are connected!");
  });



