/*
O teste a seguir é sobre potenciação e vai servir para testar a funcionalidade do vitest

*/

import { expect, test } from "vitest";

function pow(a: number, b: number) {
    return a ** b
}

test ('A potencia de 2 elevado a 2 é igual a 4', () => {
    expect(pow(2, 2)).toBe(4);
})

test ('A potencia de 2 elevado a 3 é igual a 8', () => {
    expect(pow(2, 3)).toBe(8);
})

test ('A potencia de 2 elevado a 4 é igual a 16', () => {
    expect(pow(2, 4)).toBe(16);
})

test ('A potencia de 2 elevado a 5 é igual a 32', () => {
    expect(pow(2, 5)).toBe(32);
})

test ('A potencia de 2 elevado a 6 é igual a 64', () => {
    expect(pow(2, 6)).toBe(64);
})

test ('A potencia de 2 elevado a 7 é igual a 128', () => {
    expect(pow(2, 7)).toBe(128);
})

test ('A potencia de 2 elevado a 8 é igual a 256', () => {
    expect(pow(2, 8)).toBe(256);
})

test ('A potencia de 2 elevado a 9 é igual a 512', () => {
    expect(pow(2, 9)).toBe(512);
})

test ('A potencia de 2 elevado a 10 é igual a 1024', () => {
    expect(pow(2, 10)).toBe(1024);
})

test ('A potencia de 2 elevado a 11 é igual a 2048', () => {
    expect(pow(2, 11)).toBe(2048);
})

test ('A potencia de 2 elevado a 12 é igual a 4096', () => {
    expect(pow(2, 12)).toBe(4096);
})