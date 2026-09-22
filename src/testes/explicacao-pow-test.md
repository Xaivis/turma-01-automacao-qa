# Explicação dos Testes Unitários: `pow.test.ts`

Este documento explica o objetivo, a estrutura e o funcionamento dos testes unitários de potenciação implementados no arquivo `pow.test.ts` utilizando o **Vitest**.

---

## 🎯 Objetivo do Teste

Validar o comportamento e a exatidão matemática de uma função de potenciação (`pow`), garantindo que o cálculo de $a^b$ retorne o resultado correto para diferentes expoentes.

---

## 📄 O Código do Teste

```typescript
import { expect, test } from "vitest";

// Função a ser testada
function pow(a: number, b: number) {
    return a ** b;
}

// Casos de teste automatizados
test('A potencia de 2 elevado a 2 é igual a 4', () => {
    expect(pow(2, 2)).toBe(4);
});

test('A potencia de 2 elevado a 3 é igual a 8', () => {
    expect(pow(2, 3)).toBe(8);
});

// ... testes progressivos de 2^2 até 2^12
```

---

## 🔍 Entendendo os Componentes

### 1. A Função `pow(a, b)`
* **Parâmetros**:
  * `a: number`: A **base** da potência.
  * `b: number`: O **expoente** da potência.
* **Operador `**` (Exponenciação)**: Introduzido no ECMAScript 2016 (ES7), `a ** b` calcula a base elevada ao expoente (equivalente a `Math.pow(a, b)`).

### 2. Funções do Vitest

* **`test(nome, callback)`**:
  * Define um caso de teste individual.
  * O primeiro argumento é uma descrição clara do cenário sendo validado.
  * O segundo argumento é uma função contendo a lógica e as asserções do teste.

* **`expect(valorRecebido)`**:
  * Cria a asserção sobre o resultado obtido da função sob teste.

* **`.toBe(valorEsperado)`**:
  * **Matcher** do Vitest que verifica a igualdade estrita (`===`) entre o valor retornado por `pow(a, b)` e o valor esperado. Ideal para tipos primitivos como números e strings.

---

## 📊 Tabela de Cenários Testados (Base 2)

| Caso de Teste | Base ($a$) | Expoente ($b$) | Expressão | Resultado Esperado |
| :--- | :---: | :---: | :---: | :---: |
| 1 | `2` | `2` | $2^2$ | `4` |
| 2 | `2` | `3` | $2^3$ | `8` |
| 3 | `2` | `4` | $2^4$ | `16` |
| 4 | `2` | `5` | $2^5$ | `32` |
| 5 | `2` | `6` | $2^6$ | `64` |
| 6 | `2` | `7` | $2^7$ | `128` |
| 7 | `2` | `8` | $2^8$ | `256` |
| 8 | `2` | `9` | $2^9$ | `512` |
| 9 | `2` | `10` | $2^{10}$ | `1024` |
| 10 | `2` | `11` | $2^{11}$ | `2048` |
| 11 | `2` | `12` | $2^{12}$ | `4096` |

---

## 🚀 Como Executar o Teste

### Executar especificamente este arquivo:
```bash
npx vitest src/testes/pow.test.ts
```

### Executar em modo de execução única (sem watch):
```bash
npx vitest run src/testes/pow.test.ts
```

### Executar todos os testes do projeto:
```bash
npm test
```
