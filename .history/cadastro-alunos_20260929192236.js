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

function cadastrarAluno(){
    let nome = prompt("Informe o nome do aluno: ");
    let idade = Number(prompt())

    const novoAluno = newAluno(nome, idade, curso, nota1, nota2);
}