import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";
import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";


export class AlunoDisciplina extends Model {
    public alubnoId!: number;
    public discipliaI!: number;
}

AlunoDisciplina.init(
    {
        alunoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Aluno,
                key: "id",
            },
            onDelete: "CASCADE"
        },
        disciplinaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Disciplina,
                key: "id",
            },
            onDelete: "CASCADE",
        },
    },
    {
        sequelize,
        tableName: "disciplinas",
        timestamps: false,

    }

);