const prompt = require("prompt-sync")();


const alunos = [];

function cadastrarAluno(){
    let nome = prompt("Informe o nome do aluno: ");
    let idade = Number(prompt("Informe a idade: "));
    let curso = prompt("Informe o curso: ");
    let nota1 = parseFloat(prompt("Informe a primeira nota: "));
    let nota2 = parseFloat(prompt("Informe a segunda nota: "));

    const novoAluno = new Aluno(nome, idade, curso, nota1, nota2);
    alunos.push(novoAluno);

    console.log("Aluno cadastrado com sucesso!");
}

function listarAlunos(){
    if (alunos.length === 0){
        console.log("Não há nenhum aluno cadastrado.");
    } else {
        console.log("=== Alunos cadastrados ===");

        alunos.forEach((aluno, index) => {
            const media = aluno.nota1 + aluno.nota2 / 2;
           
            console.log(`${index + 1} ${aluno.nome}`);
            console.log(`Idade: ${aluno.idade}`);
            console.log(`Curso: ${aluno.curso}`);
            console.log(`Média: ${media.toFixed(1)}`);
        });
    }

}