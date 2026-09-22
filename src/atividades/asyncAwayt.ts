
function printarMensagem(): Promise<string>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Bem vindo ao programa")
        }, 4000)
    })
}

async function main(){                                
    console.log("Programa iniciado...");              
    const mensagem = await printarMensagem();
    console.log(mensagem)                            
    console.log("Programa finalizado!");              
}

main();