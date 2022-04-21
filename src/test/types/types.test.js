import { types } from "../../types/types"

describe('Funcionamiento de types', () =>{
    test('Comparando que se envian los types', () => {
        expect(types).toEqual({
            login:'login',
            logout: 'logout',
            register: 'register'
        })
    })
})