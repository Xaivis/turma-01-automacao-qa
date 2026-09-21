import { expect, describe, test } from 'vitest';

function login(username: string, password: string): boolean{
    return username === 'patati' && password === '123456';
}

test('Permitir fazer login com credencias válidas', ()=>{
    const loginCorreto = login('patati', '123456')
    expect(loginCorreto).toBe(true)
})

describe('Negar login com credenciais inválidas', () =>{
    
    test('Negar login com senha incorreta', () =>{
        const loginIncorreto = login('patati', '12345')
        expect(loginIncorreto).toBe(false)
    })

    test('Negar login com usuário incorreta', () =>{
        const loginIncorreto = login('patata', '123456')
        expect(loginIncorreto).toBe(false)
    })

    test('Negar login com usuário e senha incorretos', () =>{
        const loginIncorreto = login('patata', '1234567')
        expect(loginIncorreto).toBe(false)
    })

    test('Negar login com campos vazios', () =>{
        const loginIncorreto = login('', '')
        expect(loginIncorreto).toBe(false)
    })


})