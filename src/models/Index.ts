import { Evento } from './Evento';
import { Participante } from './Participante';
import './associations';



Evento.belongsToMany(Participante, { through: 'EventoParticipante', as: 'participantes', foreignKey: 'eventoId' });
Participante.belongsToMany(Evento, { through: 'EventoParticipante', as: 'eventos', foreignKey: 'participanteId' });

export { Evento, Participante };

