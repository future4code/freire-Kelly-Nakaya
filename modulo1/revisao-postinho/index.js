
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {

    return `No comparador de desigualdade ${a}===${b} é ${a===b}`
    
}
console.log (checarIgualdade(3,3))

// c-)Faça uma função chamada "verificaSeEMaior"

function verificaSeEMaior (a, b){

    return `No comparador de maioridade ${a}>${b} é ${a>b}`

} console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= //É false, pois comparamos um número com uma string
// b-) 1=='1'= É true, pois os valores são iguais, indepente de ser um número e uma string
// c-) 'a'==='b'= É true, pois ambas são strings
// d-) 'b'>'a'= É false, pois ambas são strings.
// e-) 0!==null= É false, pois o zero é um número e null, é um valor vazio.


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
/*Escreva uma função que receba do usuário **nomeDoUsuario**, **anoDeNascimento**, **senhaDoUsuario** e
 **nacionalidade** e ****guarde essas informações dentro de um array `usuários.` Porém só poderão
se cadastrar:

- Usuários maiores de 18 anos
- A senha deve ter no mínimo 6 caracteres
- E que a nacionalidade seja brasileira.
*/

const nome = (prompt("Qual o seu nome?"))
const anoDeNascimento = Number(prompt ("Em que ano você nasceu?"))
const senha = (prompt ("Escolha uma senha:"))
const nacionalidade = (prompt ("Qual a sua nacionalidade?"))
let anoAtual = 2022
const idade = anoAtual - anoDeNascimento

if (idade >=18 && senha >= "6 caracteres" && nacionalidade === "Brasileiro"){
    console.log("Você pode se cadastrar")
} else {
console.log("Você não pode se cadastrar")
}



// Exercício 4-----------------------------------------------------------------------------------------------
/*Escreva uma função que peça uma senha para o usuário e verifique se está é a mesma senha cadastrada por ele.  
Dentro da função defina uma senha válida  Ex: const senha=”labenu”

- Caso a senha seja válida imprima no console a mensagem (Usuário Logado)
- Caso a senha seja inválida imprima no console (Senha Inválida)

*/
const senhaDoUsuario = prompt ("Defina uma senha:")

const login = () => {
    const login = "labenu"
    const senha = "123456"

    if (senhaDoUsuario === senha){
        console.log ("Usuário Logado")
    } else {
        console.log("Senha Inválida")
    }

}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------
/*
Escreva uma função que receba do usuário seu nome, e o nome da vacina que tomou. 
E retorne a mensagens a seguir dependendo da vacina tomada.   

`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`

Sabendo que as vacinas tem tempos diferentes  para a aplicação da segunda dose crie uma única variável ‘tempo” 
que mude seu valor dependendo da vacina informada pelo usuário, faça o mesmo com “data”.

- Coronavac = 28 dias
- Astrazenica = 90 dias
- Pfizer = 90 dias

let tempo = ""
let data = ""

Atenção: A data pode estar escrita neste formato "01/08/2021" 
( o mais simples possível) neste momento do curso. 

*/
const dadosNome = prompt ("Qual o seu nome?")
const vacina = prompt ("Qual o nome da vacina que tomou na primeira dose?")
let tempo = 30
let data = 01/08/2021

const primeiraDose = () => {
    



}
console.log(primeiraDose(`Olá ${dadosNome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`))


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());