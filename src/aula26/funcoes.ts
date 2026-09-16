//FUNÇÃO com parametro e com retorno
function somar(a: number, b: number): number{
    return a + b;
}
const resultado = somar(10, 5);
console.log(resultado);


//FUNÇÃO com parametro, mas sem retorno
function mostrarNome(nome: string): void{
    console.log(`Olá, ${nome}`);
}
mostrarNome("ivis");


//Função sem parâmetro, mas com retorno
function pegarIdade(): number{
    return 25;
}
const idade = pegarIdade()
console.log(idade)

//Função sem parâmetro e sem retorno
function mostrarMensagem(): void{
    console.log("Olá, seja bem vindo")
}
mostrarMensagem()