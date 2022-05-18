//let textoDoUsuario = prompt("Insira um texto");
/*
const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


// 1 -
/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

A) Como possui um sinal de multiplicação, será multiplicado pelos valores das variáveis. Sendo console.log (10) e console.log (50).

B) Não imprimiria nada, pois não ia aparecer nada no console.

2-

a) A função do comando é diminuir a fonte do texto e incluir a string cenoura no texto do usuário.

b) i.

const outraFuncao = function(texto) {
	return texto.trim().replaceAll("bola", "cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

ii.
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toUpperCase("Cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

iii. let textoDoUsuario = prompt("Insira um texto");
let textoDoUsuario = "    Cenouras crescem na terra    "

const outraFuncao = function(texto) {
	return texto.strim()
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

*/

//1-

function imprimeMensagem (){
    const nome = prompt ("Qual o seu nome?")
    let idade = prompt ("Qual a sua idade?")
    const cidade = prompt ("Qual cidade você mora?")
    const ocupacao = prompt ("Qual a sua ocupação")

    return (`Olá. Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}.`)
}

    const resposta = imprimeMensagem
    console.log (resposta)

//2-

function mensagemUsuario (){
    const nome = ("laís")
    let idade = Number(23)
    const cidade = ("São Paulo")
    const ocupacao = ("Instrutora")


    return (`Olá. Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}.`)
}

    const respostaDoUsuario = mensagemUsuario
    console.log (respostaDoUsuario)

    