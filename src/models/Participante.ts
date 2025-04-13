import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../instances/mysql';



export class Participante extends Model {
    declare id: number;
    declare nome: string;
    declare email: string;

    declare getEventos: () => Promise<any>;


}

Participante.init({
        nome: DataTypes.STRING,
        email: DataTypes.STRING

}, {
    sequelize,
    modelName: 'Participante'

});

