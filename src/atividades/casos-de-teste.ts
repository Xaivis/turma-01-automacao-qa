type CasosDeTestes = {
    id: number;
    titulo: string;
    descricao: string;
    automatizavel: boolean;
}

const primeiroCasoDeTeste = criarCasosDeTeste
(1, "Login", 12345, false)
const segundoCasoDeTeste = criarCasosDeTeste(2, "Cadastro", "Cadastro", true)
const terceiroCasoDeTeste = criarCasosDeTeste(3, "Produto", "Produto", false)
const quartoCasoDeTeste = criarCasosDeTeste(4, "Carrinho", "Carrinho", true)
const quintoCasoDeTeste = criarCasosDeTeste(5, "Checkout", "Checkout", false)



function criarCasosDeTeste(id: number, titulo: string, descricao: string, automatizavel: boolean): CasosDeTestes {
    return {
        id,
        titulo,
        descricao,
        automatizavel
    }
}

function descrever(dados: CasosDeTestes) {
    return `Id: ${dados.id} - Título: ${dados.titulo}`
}


function marcarAutomatizavel(dado: CasosDeTestes): CasosDeTestes {
    if (dado.automatizavel === true) {
        console.log("Já está automatizado")
    } else {
        dado.automatizavel = true
    }
    return dado
}