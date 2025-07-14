import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './Route/routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is working');
});

app.use('/books', router);

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
