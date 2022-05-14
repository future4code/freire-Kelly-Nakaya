// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  const altura = Number(prompt ("Qual a altura do retângulo?"))
  const largura = Number(prompt ("Qual a largura do retângulo?"))

  let conta = altura * largura
  
}

console.log(`A area do retangulo é ${conta}`)

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt ("Digite o ano atual:"))
  const anoNascimento = Number (prompt ("Digite o ano do seu nascimento:"))

  const diferenca = anoAtual - anoNascimento

}

console.log(`A sua idade é ${diferenca} anos`)


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const peso = prompt ("Qual o seu peso em kg?")
  const altura = prompt ("Qual a sua altura?")

  return calculaIMC = peso / (altura*altura)

}

console.log (`O seu IMC (Índice de massa corporal) é de ${calculaIMC} %`)


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nomeDoVisitante = prompt ("Qual o seu nome?")
  const idadeDoVisitante = prompt ("Qual a sua idade?")
  const emailDoVisitante = prompt ("Qual o seu e-mail?")

  const respostaDoVisitante = (`Meu nome é ${nomeDoVisitante}, tenho ${idadeDoVisitante} anos, e o meu email é ${emailDoVisitante}.`)

}

console.log (respostaDoVisitante)

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  const string = prompt ("Digite uma palavra:")
  const palavra = string.toUpperCase()

  return palavra
}

console.log (palavra)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const custo = (prompt ("Qual o custo do espetáculo?"))
  const valorIngresso = prompt ("Qual o valor do ingresso?")

  return calculaIngressosEspetaculo = custo / valorIngresso

}

console.log (`O total de ingressos vendidos nesse espetáculo foi de ${calculaIngressosEspetaculo}`)


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  const listaDeCores = prompt ("Quais são suas cores favoritas?")
  
  const cor1 = ("Vermelho")
  const cor2 = ("Azul")
  const cor3 = ("Verde")

  const corPrimeiroElemento = cor1

  return corPrimeiroElemento
}

console.log (array)

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  const listaDeCompras = prompt ("Quais são suas produtos essenciais?")
  
  const produto1 = ("Detergente")
  const produto2 = ("Sabão")
  const produto3 = ("Papel Higiênico")

  const produtoUltimoElemento = produto3

  return produtoUltimoElemento
}

console.log (array)

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const moveis = prompt ("Quais móveis seu quarto tem?")

const respostaVisit = ("Cama, escrivaninha, armário")

const novaOrdem = respostaVisit.replaceAll("cama", "armário")

return novaOrdem

}

console.log (array)

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}