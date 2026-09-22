# Automação QA - Curso de Teste de Software

Repositório de atividades e estudos práticos em **TypeScript** e automação de testes com **Vitest** do curso de Teste de Software (QA).

---

## 📁 Estrutura do Projeto

* **`src/atividades/`**: Exercícios e atividades práticas de TypeScript (tipagem estática, Promises, manipulação de arrays, etc.).
* **`src/testes/`**: Testes automatizados desenvolvidos com Vitest (`pow`, `login`, `math`, `createUser`, `soma`).
* **`src/aula25/` & `src/aula26/`**: Conteúdos abordados em aula.

---

## 📚 Documentações e Explicações (.md)

Este repositório conta com arquivos Markdown (`.md`) dedicados que explicam detalhadamente o funcionamento, a teoria e a prática dos códigos criados:

| Arquivo de Explicação | Localização | Assunto Abordado |
| :--- | :--- | :--- |
| **[explicação-casos-de-teste.md](./src/atividades/explicação-casos-de-teste.md)** | `src/atividades/` | Explicação dos tipos (`type`), funções de casos de teste e resolução do erro de tipagem TS2345. |
| **[explicacao_async_await.md](./src/atividades/explicacao_async_await.md)** | `src/atividades/` | Ciclo de vida, linha do tempo e fluxo visual de funções assíncronas com `Promise` e `async/await`. |
| **[explicacao-pow-test.md](./src/testes/explicacao-pow-test.md)** | `src/testes/` | Explicação dos testes unitários de potenciação com Vitest, asserções (`expect`) e matchers (`toBe`). |

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina.

### 1. Instalar as dependências
```bash
npm install
```

### 2. Verificar tipos (Type-check)
Para validar os tipos do TypeScript sem gerar arquivos de build:
```bash
npm run type-check
```

### 3. Rodar Testes Automatizados
```bash
npm test
```

### 4. Scripts Rápidos para Atividades
| Comando | Descrição |
| :--- | :--- |
| `npm run case` | Executa o arquivo `casos-de-teste.ts` |
| `npm run arr` | Executa o arquivo `arraysExemplos.ts` |
| `npm run atv` | Executa o arquivo `automacao.ts` |
| `npm run pro` | Executa o arquivo de Promises da aula 26 |