import { expect, describe, test } from 'vitest';

describe('Calcular a raiz quadrada de um número', ()=> {
    test('retornar a raiz quadrada de um número perfeito', () =>{
        expect(Math.sqrt(4)).toBe(2);
        expect(Math.sqrt(9)).toBe(3);
        expect(Math.sqrt(16)).toBe(4);
    });
    
    test('retornar NAN se o número for negativo', () =>{
        expect(Math.sqrt(-1)).toBeNaN();
    });

    test('Retornar 0 se for passado 0', () =>{
        expect(Math.sqrt(0)).toBe(0)
    });

})