import { Request, Response } from "express";
import { Disciplina } from "../models/Disciplina";

export const listarDisciplinas = async (req: Request, res: Response): Promise <any> => {
    const disciplinas = await Disciplina.findAll();
    return res.json(disciplinas);

};

export const cadastrarDisciplina = async (req: Request, res: Response) : Promise<any> => {
    const { nome } = req.body;

    if (nome) {
        let disciplinaExistente = await Disciplina.findOne({ where: (nome ) });
        if (!disciplinaExistente) {
            let novaDisciplina = await Disciplina.create ({ nome });

            res.status(201);
            return res.json({
                message: "Disciplina cadastrada com sucesso!",
                novaDisciplina
            });
        } else {
            return res.status(400).json({ error: "Nome da disciplina já existe."});
        }
    }

    return res.status(400).json({ error: "Nome da siciplina não enviado."});
};

export const buscarDisciplinaPorId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const disciplina = await Disciplina.findByPk(id);
    if (!disciplina) return res.status(404).json({ message: "Disciplina não encontrada." });
    res.json(disciplina);
}; 

export const deletarDisciplina = async (req: Request, res: Response) => {
    const { id } = req.params;
    const vinculacoes = await AlunoDisciplina.findOne({ where: { disciplinaId: id } });

    if (vinculacoes) {
        return res.status(400).json({ message: "Não é possível deletar: disciplina com alunos vinculados." });
    }

    const deletada = await Disciplina.destroy({ where: { id } });
    res.json({ message: "Disciplina deletada com sucesso.", deletada });
};

