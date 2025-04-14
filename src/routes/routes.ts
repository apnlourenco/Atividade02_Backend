import { Router } from 'express';

import * as AlunoController from '../controllers/AlunoController'; 
import * as DisciplinaController from '../controllers/DisciplinaController'
import * as AlunoDisciplinaController from '../controllers/AlunoDisciplinaController'


const router = Router(); 

router.get('/listarTodosAlunos', AlunoController.listarAlunos);
router.post ('/cadastrarAluno', AlunoController.cadastrarAluno);
router.get('/buscarAlunoPorId/:id', AlunoController.buscarAlunoPorId);
router.delete('/deletarAluno/:id', AlunoController.deletarAluno);

router.get('/listarTodasDisciplinas', DisciplinaController.listarDisciplinas);
router.post ('/cadastrarDisciplina', DisciplinaController.cadastrarDisciplina);
router.get('/buscarDisciplinaPorId/:id', DisciplinaController.buscarDisciplinaPorId);
router.delete('/deletarDisciplina/:id', DisciplinaController.deletarDisciplina);

router.get("/vincularAlunoDisciplina", AlunoDisciplinaController.vincularAlunoDisciplina);
router.post ("/listarDisciplinasDoAluno/alunoId", AlunoDisciplinaController.listarDisciplinasDoAluno);


export default router;
