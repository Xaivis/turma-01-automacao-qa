type Pessoa = {nome: string; idade: number}; //molde, contrato, modelo

function criarPessoa(nome: string, idade: number): Pessoa{
    return{nome, idade};
}

const p = criarPessoa("ivis", 43)
console.log(p)

type Produto = {nome: string; preco: number; estoque: number}

function criarProduto(nome: string, preco: number, estoque: number): Produto{
    return  {nome, preco, estoque}
}

const produto = criarProduto("Teclado sem fio", 150, 59);
console.log(produto)