// 
/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

1) Será impresso:

A) "Matheus Nachtergaele"
"3"
{canal: "Globo", horario: "14h"}

2) const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

A) console.log(cachorro)

nome: "Juca", 
	idade: 3, 
	raca: "SRD"

console.log(gato)

nome: "Juba", 
	idade: 3, 
	raca: "SRD"

    consolo.log(tartaruga)

nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

    B) Se refere as informações do Escopo-pai.

 3)   function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

a) False
undefined

b) No primeiro, ele imprimiu a propriedade(valor) do objeto. Já no segundo, o objeto não foi definido, por isso deu undefined.

*/

//1-

const pessoa = {
    nome: "Joana",
    apelidos: ["Jojo", "Jo", "Joaninha"]

}

const informações = (pessoa)
console.log(pessoa)

//b)

function novoObjeto(pessoa){
    novoApelido = {
        ...pessoa,
        ListaApel: ["Flor", "Florzinha", "Jujuba"],

    }
}

console.log (novoObjeto)

//2-

//a)

const fulanoUm = {
    nome: "Enzo",
    idade: 30,
    profissão: "Engenheiro"
}

const fulanoDois = {
    nome: "Julia",
    idade: 25,
    profissão: "Médica"
}

function Descricao(fulanoUm){
    const sobreFulano = {
        ...fulanoUm,
        contagemLetras: nome.lenght(),
        contagemProf: profissão.length(),

        
        }
        return console.log (`${nome}, ${contagemLetras}, ${idade}, ${profissão}, ${contagemProf}`)

    }

    Descricao(fulanoUm)

    function Descricao(fulanoDois){
        const sobreFulano = {
            ...fulanoDois,
            contagemLetras: nome.lenght(),
            contagemProf: profissão.length(),
    
            
            }
            return console.log (`${nome}, ${contagemLetras}, ${idade}, ${profissão}, ${contagemProf}`)
    
        }
    
        Descricao(fulanoDois)


        //3-

        const carrinho = []

            const fruta1 = ("Morango", true)
            const fruta2 = ("Banana", true)
            const fruta3 = ("Melancia", true)

        function receberFruta (carrinho) {

RecebeFrutaUm = fruta1.push(carrinho)
RecebeFrutaDois = fruta2.push(carrinho)
RecebeFrutaTres = fruta3.push(carrinho)

const recebeFrutas = (`${RecebeFrutaUm}, ${RecebeFrutaDois}, ${RecebeFrutaTres}`)
        
return console.log (recebeFrutas)

        }

        receberFruta(carrinho)