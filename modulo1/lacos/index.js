// 
/*
1 - let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

O código está rodando um laço (floop) até i ser menor que 5, ou seja, roda o código 5 vezes. 
O valor impresso no console será de 10.

2- const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) O que vai ser impresso no console?
Os números 18, 19, 21, 23, 25, 27, 30.

b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
Se sim, o que poderia ser usado para fazer isso? 
Sim, no caso utilizaria o for...of... para acessar a lista de elementos. Para acessar cada um invidualmente,
preciaria acessar ele pelo índice [0],[1],[2].

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
    
    - 💡 Dica
        
        <aside>
        ⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes 
        que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
        
        </aside>
        
    
    c) Por fim, imprima o array com os nomes dos bichinhos no console

*/

const respostaUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))

    if (respostaUsuario == 0) {
    console.log ("Que pena! Você pode adotar um pet!") 
} else { 
    respDois = []
    let i = 0
    while (i < respostaUsuario) {
    respDois.push (prompt("Uau! Digite o nome deles individualmente."))
    i++
    }
}
console.log (respDois)

/* 2 -

2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.
    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

    */
