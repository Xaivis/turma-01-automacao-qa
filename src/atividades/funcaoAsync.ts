interface Execucao {
    id: number;
    nome: string;
    status: 'Sucesso' | 'Falhou' | 'Em Andamento';
};


const bancoDeDados: Execucao[] = [
    { id: 1, nome: "Execução de Testes Automatizados", status: "Sucesso" },
    { id: 2, nome: "Deploy em Produção", status: "Falhou" }
];

async function buscarPeloId(id: number): Promise<Execucao> {
    await new Promise<void>(resolve => setTimeout(resolve, 1000));

    const execucao = bancoDeDados.find(item => item.id === Number(id));

    if (!execucao) {
        throw new Error(`O id ${id} não existe ou não foi encontrado!`);
    }

    return execucao;
}
