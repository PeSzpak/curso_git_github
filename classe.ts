class Pessoa {
    nome: string;
    idade: number;
    cpf: number;

    constructor (nome: string, idade: number, cpf: number) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf
    }
}
class Emprego extends Pessoa {
    empresa: string;
    cargo: string;
    salario: number;
    cargaHoraria: number;
}


const pedro = new Pessoa("pedro", 18, 909329123)

console.log(pedro);