import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import menuRoutes from './Routes/menuroutes.js';
import reservationRoutes from './Routes/reservationRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});