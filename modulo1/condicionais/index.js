// 1- 

/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
 const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) Explique o que o código faz. Qual o teste que ele realiza?
Ele testa qualquer número para ver se é o resto da operação é igual a dois ou zero.

b) Para que tipos de números ele imprime no console "Passou no teste"? 
Números pares

c) Para que tipos de números a mensagem é "Não passou no teste"? 
Números ímpares

2- 

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?
Para identificar a fruta e seu respectivo preço.

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta Maçã é R$2.25.

c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se 
retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário 
"BREAK PARA O ITEM c.")?
O sistema irá considera o valor da Pêra sendo R$5,00, pois a última variável é a que define.

3 -

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) O que a primeira linha está fazendo?
Pedindo ao usuário que digite um número

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
Caso tenha digitado 10, aparecerá que o número passou no teste. Caso seja -10, não irá aparecer nada, pois o sistema considera somente número maiores que 0.
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) { //Se if (numero < 0), a condição seria true.
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se 
ele/ela pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
    Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/

const UsuarioIdade = Number(prompt ("Qual a sua idade?"))

if (UsuarioIdade > 18) {
console.log ("Parabéns! Você pode dirigir")
} else {
    console.log ("Desculpe! Você ainda não pode dirigir!") 
}

console.log (UsuarioIdade)

/*

2- Agora faça um programa que verifica que turno do dia um aluno estuda. 
Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console
a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".

*/

const turnoAluno = (prompt ("Em qual turno você estuda? Digite M (matutino), V (vespertino) ou N (noturno)."))

if (turnoAluno === "M") {
    console.log ("Bom dia!")
}
 else if (turnoAluno === "V") {
    console.log ("Boa tarde!")
}
    else if (turnoAluno === "N") {
        console.log ("Boa noite!")

    } else {
        console.log ("Essa opção não está disponível.")
    }

// 3 - 

switch (turnoAluno) {
    case "M":
    console.log ("Bom dia!")
    break
    case "V":
        console.log ("Boa tarde!")
        break
        case "N":
            console.log ("Boa noite!")
            break

}

/*Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá 
a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre 
o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, 
imprima "Escolha outro filme :("

*/

const escolhaFilme = prompt ("Qual gênero de filme você irá assistir?")
const precoIngresso = Number(prompt ("Qual o valor do ingresso?"))

if (escolhaFilme = "Fantasia", precoIngresso <= 15) {
    console.log ("Bom filme!")
} else {
    console.log ("Escolha outro filme :(")
}
