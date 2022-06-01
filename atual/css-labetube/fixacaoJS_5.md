function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
 // Escreva seu código aqui
    
let nomeAnimais = animais.map(function(item, indice){
   return item.nome;
});

  criarArrayNomesAnimais(nomeAnimais)
  
 console.log(criarArrayNomesAnimais(nomeAnimais))