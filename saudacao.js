// se ninguéminformar o segundo valor, ele assume o parâmetro

function saudacao(nome = "Senac"){
    return console.log(`Olá, ${nome}!`)
}

saudacao();
saudacao("Ana");