// function buscarNome(): Promise<string>{
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve("Juan");
//         }, 4000);
//     });
// }

// async function executar() {
//     console.log("Início do programa...");
//     const nome = await buscarNome();
//     console.log(nome); //Juan
//     console.log("Fim do programa!")
// }

// executar();
//console.log(typeof Promise)

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function buscarUsuario(id: number): Promise<string> {
    await delay(5000);
    return `Usuário #${id}`;    
}

console.log("Início do programa...");
const nome = await buscarUsuario(42);
console.log(nome); // Usuário #42
console.log("Fim do programa!")