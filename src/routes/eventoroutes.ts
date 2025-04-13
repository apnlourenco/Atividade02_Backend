import { Router } from 'express';

import * as EventoController from '../controllers/EventoController'; 

const router = Router(); 

router.get('/listarEventos', EventoController.listarEventos);
router.post('/cadastrarEvento', EventoController.cadastrarEvento);
router.post('/inscreverParticipante', EventoController.inscreverParticipante);

export default router;

