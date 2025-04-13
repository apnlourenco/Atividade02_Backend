import { Request, Response } from "express";
import { Evento } from '../models/Evento';
import { Participante } from '../models/Participante';

export const listarEventos = async (req: Request, res: Response): Promise<void> => {
	const eventos = await Evento.findAll({ include: Participante });
	res.json(eventos);

};


export const cadastrarEvento = async (req: Request, res: Response): Promise<void> => {
	const { nome, data } = req.body;
	const novoEvento = await Evento.create({ nome, data });


	res.status(201).json({ message: "Evento cadastrado com sucesso!", novoEvento });
};

export const inscreverParticipante = async (req: Request, res: Response): Promise<any> => {
	const { eventoId, participanteId } = req.params;

	const evento = await Evento.findByPk(eventoId);
	const participante = await Participante.findByPk(participanteId);

	if (!evento || !participante) {
		return res.status(404).json({ message: "Evento ou participante não encontrada."});
	}

	await evento.addParticipante(participante);
	res.json({ message: "Participante inscrito com sucesso." });

};	