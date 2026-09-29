import { describe, it, expect } from 'vitest';

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

describe('buscarPeloId', () => {
    describe('Caminho feliz', () => {
        it('deve retornar a execução correta quando o id existir (ID 1)', async () => {
            const resultado = await buscarPeloId(1);

            expect(resultado).toEqual({
                id: 1,
                nome: 'Execução de Testes Automatizados',
                status: 'Sucesso'
            });
            expect(resultado.id).toBe(1);
            expect(resultado.status).toBe('Sucesso');
        });
    });

    describe('Caminho de erro', () => {
        it('deve lançar um erro quando o id não for encontrado', async () => {
            const idInexistente = 99;

            await expect(buscarPeloId(idInexistente)).rejects.toThrow(
                `O id ${idInexistente} não existe ou não foi encontrado!`
            );
        });
    });
});
