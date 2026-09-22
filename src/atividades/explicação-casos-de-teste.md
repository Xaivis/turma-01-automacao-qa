# Explicação: Casos de Teste em TypeScript

Este documento detalha as estruturas, funções e a análise de erros de tipagem do arquivo [`casos-de-teste.ts`](file:///c:/Users/PCCASA/Documents/Curso%20APONTI%20-%20teste%20de%20software/automacao-qa/src/atividades/casos-de-teste.ts).

---

## 📋 Estruturas Implementadas

No arquivo `casos-de-teste.ts`, foram criadas as seguintes definições:

### 1. Definição de Tipo (`type CasosDeTestes`)
Estrutura de dados personalizada para modelar um caso de teste:
```typescript
type CasosDeTestes = {
    id: number;
    titulo: string;
    descricao: string;
    automatizavel: boolean;
}
```

### 2. Função de Criação (`criarCasosDeTeste`)
Recebe os parâmetros tipados e retorna um objeto do tipo `CasosDeTestes`:
```typescript
function criarCasosDeTeste(id: number, titulo: string, descricao: string, automatizavel: boolean): CasosDeTestes {
    return { id, titulo, descricao, automatizavel };
}
```

### 3. Função Utilitária de Descrição (`descrever`)
Retorna uma string formatada contendo o identificador e o título do caso de teste:
```typescript
function descrever(dados: CasosDeTestes) {
    return `Id: ${dados.id} - Título: ${dados.titulo}`;
}
```

### 4. Função de Atualização de Status (`marcarAutomatizavel`)
Verifica se o caso de teste já é automatizável; se não for, altera a propriedade `automatizavel` para `true`:
```typescript
function marcarAutomatizavel(dado: CasosDeTestes): CasosDeTestes {
    if (dado.automatizavel === true) {
        console.log("Já está automatizado");
    } else {
        dado.automatizavel = true;
    }
    return dado;
}
```

### 5. Instanciação de Casos de Teste
Simulação de 5 cenários (*Login*, *Cadastro*, *Produto*, *Carrinho* e *Checkout*):
```typescript
const primeiroCasoDeTeste = criarCasosDeTeste(1, "Login", 12345, false);
const segundoCasoDeTeste = criarCasosDeTeste(2, "Cadastro", "Cadastro", true);
const terceiroCasoDeTeste = criarCasosDeTeste(3, "Produto", "Produto", false);
const quartoCasoDeTeste = criarCasosDeTeste(4, "Carrinho", "Carrinho", true);
const quintoCasoDeTeste = criarCasosDeTeste(5, "Checkout", "Checkout", false);
```

---

## 🔍 Análise do Erro de Tipagem

![Erro de Tipagem no VS Code](../../assets/erro-tipagem.png)

Durante a instanciação do `primeiroCasoDeTeste`:
```typescript
const primeiroCasoDeTeste = criarCasosDeTeste(1, "Login", 12345, false);
```

### 1. Erro de Tipagem (Type Error / TS2345) 🔴
- **Mensagem do Erro**:
  > `"O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'."`
- **Tipo de Erro**:
  **Erro de Tipo em Tempo de Compilação (Static Type Checking Error)** provocado pelo verificador de tipos do TypeScript.
- **Causa**:
  O 3º parâmetro da função `criarCasosDeTeste` é `descricao`, definido estritamente como `string`. Ao invocar a função passando o número `12345` (`number`), ocorre a incompatibilidade:
  - **Esperado**: `string`
  - **Recebido**: `number` (`12345`)

### 2. ✅ Como Corrigir
Passe um valor do tipo `string` para o campo `descricao`:
```typescript
// Opção 1: Descrição textual
const primeiroCasoDeTeste = criarCasosDeTeste(1, "Login", "Fluxo de login de usuário", false);

// Opção 2: Número como string
const primeiroCasoDeTeste = criarCasosDeTeste(1, "Login", "12345", false);
```

---

## 🚀 Como Executar e Validar

### 1. Verificar Erros de Tipo (Type-check)
Para checar a tipagem sem gerar arquivos compilados:
```bash
npm run type-check
```

### 2. Executar o Arquivo
Após corrigir o erro de tipo:
```bash
npm run case
```
*(Executa `npx tsx src/atividades/casos-de-teste.ts`)*
