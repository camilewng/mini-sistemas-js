const prompt = require("prompt-sync")();

class Aluno{
    constructor(nome, idade, curso, nota1, nota2){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
}

function exibirMenu(){

    let opcao;

    do {
    console.log("\n=== MENU ===");
    console.log("1 - Cadastrar Aluno");
    console.log("2 - Listar Alunos");
    console.log("0 - Sair");

    opcao = Number(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                cadastrarAluno();
            break;

            case 2:
                listarAlunos();
            break;

            case 3:
                buscarPorNome();
            break;

            case 0:
            console.log("Programa encerrado.");
            break;
            
            default:
            console.log("Opção inválida.");
        }
    } while (opcao !== 0);  
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
    
    console.log("\n Aluno cadastrado com sucesso!");
}

function listarAlunos(){
    if (alunos.length === 0){
        console.log("\n Não há nenhum aluno cadastrado.");
    } else {
        console.log("\n === Alunos cadastrados ===");

        alunos.forEach((aluno, index) => {
            const media = (aluno.nota1 + aluno.nota2) / 2;
           
            console.log(`${index + 1}. ${aluno.nome}`);
            console.log(`Idade: ${aluno.idade}`);
            console.log(`Curso: ${aluno.curso}`);
            console.log(`Média: ${media.toFixed(1)}`);
        });
    }

}

function buscarPorNome(){
    if (alunos.length === 0){
        console.log("\n Não há nenhum aluno cadastrado.");

        return;
    }

    const nomeBusca = prompt("Informe o nome do aluno para pesquisar: ").toLowerCase();

    const encontrados = alunos.filter(aluno => 
        aluno.nome.toLowerCase().includes(nomeBusca));

    if (encontrados.length === 0){
        console.log("Nenhum aluno com esse nome foi encontrado.");
    } else {
        console.log(`=== Resultado da Pesquisa (${encontrados.length}) ===`);

        encontrados.forEach((aluno, index) => {
            const media = (aluno.nota1 + aluno.nota2) / 2;

            console.log(`${index + 1}. ${aluno.nome}`);
            console.log(`Idade: ${aluno.idade}`);
            console.log(`Curso: ${aluno.curso}`);
            console.log(`Média: ${media.toFixed(1)}`);
        });
    }
}

exibirMenu();