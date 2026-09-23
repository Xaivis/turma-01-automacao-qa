import { title } from "process";

interface Postagem {
    id: number,
    title: string,
    body: string
}

//GET - Buscar postagem
async function buscarPostagem(id: number): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    console.log("STATUS");
    console.log(res.status);

    const resGet = await res.json() as Promise<Postagem>;

    return resGet;
}

//POST - Cria uma nova postagem
async function criarPostagem(): Promise<Postagem> {
    const res = await fetch(`
        https://jsonplaceholder.typicode.com/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: "Minha primeira postagem",
                body: "nesta parte vamos descrever",
                userId: 1
            }),
        });
        console.log("STATUS");
        console.log(res.status);
    
    const resPost = await res.json() as Promise<Postagem>;
    return resPost;
}

//PUT - atualiza todo o conteúdo
async function atualizarPostagemCompleta(id: number): Promise<Postagem> {
    const corpoEnviado = {
        title: "Atualização da minha primeira postagem",
        body: "nesta parte vamos descrever novamente o que vai ser feito",
        userId: 2
    }
    const res = await fetch(`
        https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpoEnviado),
        });
    console.log("corpo enviado")
    console.log(corpoEnviado)

    console.log("STATUS");
    console.log(res.status);
    
    const resPut = await res.json() as Promise<Postagem>;
    return resPut;
}

async function deletar(id: number): Promise<void> {
    const res = await fetch(`
        https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        });
    console.log("STATUS");
    console.log(res.status);

    //return res;
}

const delet = await deletar(33);
console.log(delet);


//PATCH - atualiza parte do conteúdo
async function atualizarParteDaPostagem(id: number): Promise<Postagem> {
    const corpoEnviado = {
        // title: "Atualização da minha primeira postagem",
        body: "alteração realizada com sucesso!!!",
        //userId: 2
    }
    const res = await fetch(`
        https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpoEnviado),
        });
    console.log("corpo enviado")
    console.log(corpoEnviado)

    console.log("STATUS");
    console.log(res.status);
    
    const resPatch = await res.json() as Promise<Postagem>;
    return resPatch;
}

const patch = await atualizarParteDaPostagem(33);
console.log(patch);
//const get = await buscarPostagem(35);
//console.log(get);
//console.log(`O título é: ${get.title}`);

//const post = await criarPostagem();
//console.log(post);

//const put = await atualizarPostagemCompleta(33);
//console.log(put);


