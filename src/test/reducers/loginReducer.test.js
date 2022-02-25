import { loginReducer } from "../../reducers/loginReducer"
import { types } from "../../types/types"

describe('Probando reducers de la app', () => {

    test('Estado inicial del reducer', () => {
        const state = loginReducer({ login: false }, {})
        expect(state).toEqual({ login: false })
    })

    test('Login reducer', () => {
        const action = {
            type: types.login,
            payload: {
                id: '123abc',
                name: 'Sebas'
            }
        }
        const state = loginReducer({ login: true }, action);
        expect(state).toEqual({login: true, id: '123abc', name: 'Sebas'
        })
    })

    test('Logout reducer', () => {
        const action={
            type:types.logout
        }

        const state = loginReducer({login:true,id:'123abc', name:'Sebas'},action)
        expect(state).toEqual({login:false})
    })
})

// con el shallow acordarnos