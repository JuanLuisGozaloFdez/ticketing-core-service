import { Router } from 'express';
import * as ticketController from '../controllers/ticketController';

const router = Router();

router.get('/', ticketController.listTickets);
router.post('/', ticketController.createTicket);
router.get('/:id', ticketController.getTicket);

export default router;
