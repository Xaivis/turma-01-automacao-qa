type Execucoes = {
    nome: string,
    passou: boolean,
    tempo: number
}

const execucoes: Execucoes[] = [
    {nome: "login validado", passou: true, tempo: 3},
    {nome: "login inválido", passou: false, tempo: 4},
    {nome: "carregamento da tela", passou: true, tempo: 1},
    {nome: "logout", passou: true, tempo: 8},
    {nome: "fechamento do programa", passou: false, tempo: 10},

    ]

const nomes = execucoes.map(p => p.nome);
console.log(nomes);

const testesQuePassaram = execucoes.filter(p => p.passou === true);
console.log(testesQuePassaram);

const tempoTotal = execucoes.reduce((acc, pessoas) => pessoas.tempo + acc, 0)
console.log(tempoTotal);


console.log(`A soma do tempo total é de: ${tempoTotal} segundos.`);