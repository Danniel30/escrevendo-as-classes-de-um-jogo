const input = require('readline-sync');

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = "";
    }

    atacar() {
        switch (this.tipo) {
            case 'mago':
                this.ataque = 'magia';
                break;
            case 'guerreiro':
                this.ataque = 'espada';
                break;
            case 'monge':
                this.ataque = 'artes marciais';
                break;
            case 'ninja':
                this.ataque = 'shuriken';
                break;
            default:
                this.tipo = `Tipo ${this.tipo} Inválido`;
                this.ataque = 'Ataque Inválido';
        }
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let nome = input.question('Informe o nome do herói: ');
let idade = input.questionInt('Informe a idade do herói: ');
let tipo = input.question('Informe o tipo do herói [mago, guerreiro, monge ou ninja]: ');

let heroi = new Heroi(nome, idade, tipo.toLowerCase());
heroi.atacar();