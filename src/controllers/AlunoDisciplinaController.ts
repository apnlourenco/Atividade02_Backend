import { Request, Response } from "express";
import { Disciplina } from "../models/Disciplina";
import { Aluno } from "../models/Aluno";


export const listarDisciplinasDoAluno = async (req: Request, res: Response) : Promise<any> => {
    try {
        const { alunoId } = req.params;

        const aluno = await Aluno.findByPk(alunoId, {
            include: { model: Disciplina },
        
        });
        if (aluno) {
            return res.json(aluno);
        } else {
   
        return res.status(404).json({ erros: "Aluno não encontrado." });
    }
    }   catch (error) {
    console.error(error);

    return res.status(500).json({ erro: "Erro ao buscar as disciplinas." });
    }
};

export const vincularAlunoDisciplina = async (req: Request, res: Response) : Promise<any> => {
    const { alunoId, disciplinaId } = req.body;

    const aluno = await Aluno.findByPk(alunoId);
    const disciplina = await Disciplina.findByPk(disciplinaId);

    if (!aluno || !disciplina) {
        return res.status(404).json({  error: "Aluno ou disciplina não encontrada." });
    }

    await (aluno as any).addDisciplina(disciplina);

    return res.json({ message: "Aluno vinculado à disciplina com sucesso!"});

};
