import { Request, Response } from 'express';
import * as ticketService from '../services/ticketService';

export const listTickets = (_req: Request, res: Response) => {
  const tickets = ticketService.list();
  res.json(tickets);
};

export const createTicket = (req: Request, res: Response) => {
  const { title, owner } = req.body;
  if (!title || !owner) {
    return res.status(400).json({ error: 'title and owner are required' });
  }
  const t = ticketService.create({ title, owner });
  res.status(201).json(t);
};

export const getTicket = (req: Request, res: Response) => {
  const { id } = req.params;
  const t = ticketService.get(id);
  if (!t) return res.status(404).json({ error: 'not found' });
  res.json(t);
};
