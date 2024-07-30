import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';


dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());


const corsOptions = {
  origin: 'https://to-do-list-fawn-gamma.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
};
app.use(cors(corsOptions));



app.get('/', (req, res) => {
    res.send('root path server');
  });


app.use('/users',userRoutes());



app.listen(port , function(){
    console.log(`server is listening at http://localhost:${port}`);
});


