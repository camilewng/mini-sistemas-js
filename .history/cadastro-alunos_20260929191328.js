const prompt = require("prompt-sync")();

let opcao;

do {
 console.log("\n=== MENU ===");
 console.log("1 - ...");
 console.log("2 - ...");
 console.log("0 - Sair");

 opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
        break;

        case 2:
        break;

        case 0:
        console.log("Programa encerrado.");
        break;
        
        default:
        console.log("Opção inválida.");
    }
} while (opcao !== 0);    

function cadastrarAluno(nome, idade, curso, nota1, nota2){
    this.nome = nome;
    this.idade = Number(idade);
    this.curso = curso;
    this.nota1 = numFloat(nota1);
    this.nota2 = numFloat(nota2)

}