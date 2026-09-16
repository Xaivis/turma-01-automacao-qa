import PromptSync from "prompt-sync";

const prompt = PromptSync();

let automatizaveis: number = 0;
let naoAutomatizaveis: number = 0;

for(let i = 1; i <= 5; i++){
    const cenario: string = prompt(`Digite o ${i}º cenário: `);
    const resposta: string = prompt(`É automatizável? (sim/não)`).toLowerCase();

    // while(resposta != "sim" || "não" || "nao"){
    //     resposta.toLowerCase();
    //     console.log(prompt("Digite sim ou não:"))
    // }
    if(resposta === "sim"){
        console.log(`${cenario} -> Automatizar`);
        automatizaveis++;
    } else if (resposta === "não" || resposta === "nao"){
        console.log(`${cenario} -> Não Automatizar`);
        naoAutomatizaveis++;
    } else{
        console.log("Ocorreu um erro")
    }
};

console.log(`Total de cenários Automatizáveis: ${automatizaveis}`);
console.log(`Total de cenários Não automatizáveis: ${naoAutomatizaveis}`);