const prompt = require("prompt-sync")();

let opcao;

do {
 console.log("\n=== MENU ===");
 console.log("1 - Cadastrar Aluno");
 console.log("2 - ...");
 console.log("0 - Sair");

 opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            cadastrarAluno();
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

class Aluno{
    constructor(nome, idade, curso, nota1, nota2){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
}

const alunos = [];

function cadastrarAluno(){
    let nome = prompt("Informe o nome do aluno: ");
    let idade = Number(prompt("Informe a idade: "));
    let curso = prompt("Informe o curso: ");
    let nota1 = parseFloat(prompt("Informe a primeira nota: "));
    let nota2 = parseFloat(prompt("Informe a segunda nota: "));

    const novoAluno = new Aluno(nome, idade, curso, nota1, nota2);

    alunos.push(novoAluno);
}

function listarAlunos(){
    if (alunos.length === 0){
        console.log("Não há nenhum aluno cadastrado.");
    } else {
        console.log("--- Alunos cadastrados ---");

        alunos.forEach((Aluno, index) => {
            const media = Aluno.nota1 + Aluno.nota2;
        });
    }

}