import express from 'express';
import cors from 'cors';
import ticketsRouter from './routes/tickets';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

app.use('/tickets', ticketsRouter);

export default app;
