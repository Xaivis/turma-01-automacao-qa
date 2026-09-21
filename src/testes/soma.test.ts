import { expect, test } from 'vitest';

function sum(a: number, b: number){
    return a + b;
}

test('A soma de 1 + 2 é igual a 3', ()  => {
    expect(sum(1, 2)).toBe(3);
})