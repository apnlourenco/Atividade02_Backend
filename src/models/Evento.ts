import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, NonAttribute } from 'sequelize';
import { sequelize } from '../instances/mysql';
import { Participante } from './Participante';


export class Evento extends Model<
  InferAttributes<Evento, { omit: 'participantes' }>,
  InferCreationAttributes<Evento, { omit: 'participantes' }>
> {
  declare id: CreationOptional<number>;
  declare nome: string;
  declare data: Date;

  // Métodos de associação
  declare addParticipante: (participante: Participante) => Promise<void>;
  declare getParticipantes: () => Promise<Participante[]>;
  declare setParticipantes: (participantes: Participante[]) => Promise<void>;
  declare participantes?: NonAttribute<Participante[]>; // útil pra incluir no findAll
}

Evento.init<InferAttributes<Evento>, InferCreationAttributes<Evento>>({
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Evento'
});
