type Pessoa = {
    nome: string,
    sexo: string,
    idade: number,
    peso: number,
    altura: number
}

const pessoas: Pessoa[] = [
    {nome: "José", sexo: "M", idade: 18, peso: 67, altura: 1.70},
    {nome: "Maria", sexo: "F", idade: 15, peso: 63, altura: 1.65},
    {nome: "João", sexo: "M", idade: 30, peso: 75, altura: 1.80},
    {nome: "Ana", sexo: "F", idade: 20, peso: 68, altura: 1.68},
    {nome: "Julia", sexo: "F", idade: 25, peso: 59, altura: 1.65},
    {nome: "Marcos", sexo: "M", idade: 85, peso: 60, altura: 1.60},
    {nome: "Carlos", sexo: "M", idade: 34, peso: 69, altura: 1.70},
    {nome: "James", sexo: "M", idade: 28, peso: 71, altura: 1.55},
    {nome: "Marquinhos", sexo: "M", idade: 75, peso: 75, altura: 1.65},
    {nome: "Carla", sexo: "F", idade: 11, peso: 40, altura: 1.40}
]

const nomesPessoas = pessoas.map(p => p.nome);
console.log(nomesPessoas);

const pessoasComMenosDeVinteAnos = pessoas.filter(p => p.idade >= 20);
console.log(pessoasComMenosDeVinteAnos);

const nomeDePessoasComMaisDeVinteAnos = pessoas
    .filter(p => p.idade >= 20)
    .map(p => p.nome)
console.log(nomeDePessoasComMaisDeVinteAnos);

const somaDasIdades = pessoas.reduce(function(acumulador, pessoa){
    return acumulador + pessoa.idade
}, 0);
console.log(`A soma das idades é: ${somaDasIdades}`);
console.log(`A media das idades é: ${(somaDasIdades / pessoas.length).toFixed(2)}`);