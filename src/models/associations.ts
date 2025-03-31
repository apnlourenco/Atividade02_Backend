import { sequelize } from "../instances/mysql";
import { Aluno } from "./Aluno";
import { AlunoDisciplina } from "./AlunoDisciplina";
import { Disciplina } from "./Disciplina";


Aluno.belongsToMany(Disciplina, {
    through: AlunoDisciplina,
    foreignKey: "alunoid"

});

Disciplina.belongsToMany(Aluno, {
    through: AlunoDisciplina,
    foreignKey: "disciplinaId"

});

console.log("Relações entre models configuradas!");