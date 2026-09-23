import { describe, test, expect } from 'vitest';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Interfaces para tipagem dos dados da API
interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface Comentario {
    postId: number;
    id: number;
    name?: string;
    email: string;
    body: string;
}

describe('Testes de Integração - API de Postagens (JSONPlaceholder)', () => {

    // ==========================================
    // GET - Buscar uma postagem por ID
    // ==========================================
    describe('GET /posts/:id', () => {
        test('Deve retornar status 200 e os dados da postagem com ID 1', async () => {
            const resposta = await fetch(`${BASE_URL}/posts/1`);
            const dados = await resposta.json() as Post;

            // Valida o status da resposta HTTP
            expect(resposta.status).toBe(200);

            // Valida a estrutura e os dados do recurso retornado
            expect(dados).toHaveProperty('id', 1);
            expect(dados).toHaveProperty('userId');
            expect(dados).toHaveProperty('title');
            expect(dados).toHaveProperty('body');
            expect(typeof dados.title).toBe('string');
        });

        test('Deve retornar status 404 para uma postagem inexistente', async () => {
            const resposta = await fetch(`${BASE_URL}/posts/99999`);
            expect(resposta.status).toBe(404);
        });
    });

    // ==========================================
    // GET - Buscar comentários de uma postagem
    // ==========================================
    describe('GET /posts/:id/comments', () => {
        test('Deve retornar status 200 e a lista de comentários do post 1', async () => {
            const resposta = await fetch(`${BASE_URL}/posts/1/comments`);
            const comentarios = await resposta.json() as Comentario[];

            expect(resposta.status).toBe(200);
            expect(Array.isArray(comentarios)).toBe(true);
            expect(comentarios.length).toBeGreaterThan(0);

            // Valida a estrutura do primeiro comentário da lista
            const primeiroComentario = comentarios[0];
            expect(primeiroComentario).toHaveProperty('postId', 1);
            expect(primeiroComentario).toHaveProperty('id');
            expect(primeiroComentario).toHaveProperty('email');
            expect(primeiroComentario).toHaveProperty('body');
        });
    });

    // ==========================================
    // POST - Criar uma nova postagem
    // ==========================================
    describe('POST /posts', () => {
        test('Deve criar uma postagem com sucesso retornando status 201 e o ID gerado', async () => {
            const novaPostagem = {
                title: 'Minha primeira postagem de teste',
                body: 'Conteúdo detalhado da postagem de teste automatizado',
                userId: 1
            };

            const resposta = await fetch(`${BASE_URL}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(novaPostagem)
            });

            const dados = await resposta.json() as Post;

            // Valida status 201 Created
            expect(resposta.status).toBe(201);

            // Valida se os dados enviados foram retornados com o novo ID gerado
            expect(dados).toHaveProperty('id');
            expect(dados.title).toBe(novaPostagem.title);
            expect(dados.body).toBe(novaPostagem.body);
            expect(dados.userId).toBe(novaPostagem.userId);
        });
    });

    // ==========================================
    // PUT - Atualização completa de uma postagem
    // ==========================================
    describe('PUT /posts/:id', () => {
        test('Deve atualizar todos os campos da postagem retornando status 200', async () => {
            const dadosAtualizados = {
                id: 1,
                title: 'Título Totalmente Atualizado',
                body: 'Corpo da postagem totalmente reescrito',
                userId: 1
            };

            const resposta = await fetch(`${BASE_URL}/posts/1`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosAtualizados)
            });

            const dados = await resposta.json() as Post;

            expect(resposta.status).toBe(200);
            expect(dados.title).toBe(dadosAtualizados.title);
            expect(dados.body).toBe(dadosAtualizados.body);
        });
    });

    // ==========================================
    // PATCH - Atualização parcial de uma postagem
    // ==========================================
    describe('PATCH /posts/:id', () => {
        test('Deve atualizar apenas o campo body da postagem retornando status 200', async () => {
            const alteracaoParcial = {
                body: 'Alteração parcial realizada com sucesso via teste automatizado!'
            };

            const resposta = await fetch(`${BASE_URL}/posts/1`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(alteracaoParcial)
            });

            const dados = await resposta.json() as Partial<Post>;

            expect(resposta.status).toBe(200);
            expect(dados.body).toBe(alteracaoParcial.body);
            expect(dados).toHaveProperty('id', 1);
        });
    });

    // ==========================================
    // DELETE - Deletar uma postagem
    // ==========================================
    describe('DELETE /posts/:id', () => {
        test('Deve deletar uma postagem com sucesso retornando status 200', async () => {
            const resposta = await fetch(`${BASE_URL}/posts/1`, {
                method: 'DELETE'
            });

            expect(resposta.status).toBe(200);
        });
    });

});
