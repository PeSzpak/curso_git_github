class Pessoa {
  nome: string;
  idade: number;
  cpf: number;

  constructor(nome: string, idade: number, cpf: number) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
  }
}
class Emprego extends Pessoa {
  empresa: string;
  cargo: string;
  salario: number;
  cargaHoraria: number;

  constructor(
    nome: string,
    idade: number,
    cpf: number,
    empresa: string,
    cargo: string,
    salario: number,
    cargaHoraria: number
  ) {
    super(nome, idade, cpf);
    this.empresa = empresa;
    this.cargo = cargo;
    this.salario = salario;
    this.cargaHoraria = cargaHoraria;
  }
  apresentar() {
    return `Olá eu me chamo ${this.nome} tenho ${this.idade}, sou o portador do cpf: ${this.cpf}.
        estou trabalhando atualmenten na ${this.empresa} e ocupo o cargo de ${this.cargo}. Com uma carga horária de ${this.cargaHoraria} por semana`;
  }
}

const pedro = new Pessoa("pedro", 18, 909329123);
const Szpak = new Emprego(
  "pedro",
  18,
  909329123,
  "Oboticario",
  "tech lead",
  45600,
  40
);

console.log(pedro);
console.log(Szpak);
