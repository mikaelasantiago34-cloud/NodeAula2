// funções que criam e trensformam dados

// Converte para numero com uma casa decimal (oara exibir bonito)
function formatar(valor){
    return Number(valor.toFixed(1))
}   
// recebe dados e devolve um aluno completo
function criarAluno(nome, p1,p2,p3){
    const media = (p1+p2+p3)/3;
    let situacao;
    if(media >= 7){
        situacao = "Recuparação";
    }
    else {
        situacao = "Reprovado";
    }
    return {nome: nome, media: formatar(media), situacao: situacao}
}

// recebe uma lista e devolve o relatório em texto, uma linha por aluno

function relatorio(lista){
    let texto = "";
    for (let i = 0; i < lista.length; i++){
        const linha = `${lista[i].nome} teve a média ${lista[i].media.toFixed(1)}`;
        texto += `${linha} - ${lista[i].situacao}\n`;
    }
    return texto;
}



const turma = [
    criarAluno("Bruno", 7, 8, 9),
    criarAluno("Carla", 5, 6, 7),
    criarAluno("Diego", 4, 5, 4)
];

console.log(relatorio(turma));