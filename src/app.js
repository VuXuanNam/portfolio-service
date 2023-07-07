import express from 'express';
import productRouter from './routes/product.js';
import categoryRouter from './routes/category.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// config
dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(cors());

//router
app.use('/api', productRouter);
app.use('/api', categoryRouter);

// connect to db
const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://namvu:Namvu3004@namvu.pdggycx.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('successfully');
  } catch (error) {
    console.log(error);
  }
};
connectDB();
// mongodb+srv://linhvh203:Linhdz112003%40@portfolio.qifyxg6.mongodb.net/?retryWrites=true&w=majority

// export const viteNodeApp = app;
app.listen(8080, () => {
  console.log('listening on port 8080');
});
