/* 1- 

const usuarios = 
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

  a) Aparecerão todos os índices do Array


  2- const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

b) Aparecerão somente os nomes da lista do array.

3- 

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

a) Aparecerá tudo o que for diferente de 'Chijo', no caso, os elementos do índices 1 e 2.

_____________________________________________________________________________________________________

1 - const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},

a) Crie um novo array que contenha apenas o nome dos doguinhos
*/

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const somenteNome = pets.map((item, index, array) => {
    return item.nome
 })
 
 console.log(somenteNome)

 /* b) Crie um novo array apenas com os [cachorros salsicha].

*/
const listaDosSalsichas = pets.map((pets) => {
    
    if(pets.raca !== "Salsicha"){
        return true
    } console.log (pets)


})
/*
c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

*/

const clientesPoodles = pets.map((pets) => {

    if (pets.raca !== "Poodle"){
        return true
        } 
        
        poodles = ("Madame"),("Fluffly")
        console.log ((`Você ganhou um cupom de desconto de 10% para tosar o/a ${poodles}!`))

})

/*
 a) Crie um novo array que contenha apenas o nome de cada item
*/

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

  const nomeItens = produtos.map((item, index, array) => {
    return item.nome
 })
 
 console.log(nomeItens)

 /*
b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

*/

const nomePreco = produtos.map((item) => {
    return {nome:item.nome, preco:item.preco}
    })

 console.log (nomePreco)

/*

c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

*/

const listaCatBebidas = produtos.filter((produtos) => {
    
 if (produtos.categoria === "Bebidas"){
 return true
 }
 })

 const nomeBebidas = listaCatBebidas.map((produtos) => {
     console.log(produtos.nome)
    return produtos.nome
    })
    
     console.log(nomeBebidas)
    
     /*

d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"


e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê".

*/ 