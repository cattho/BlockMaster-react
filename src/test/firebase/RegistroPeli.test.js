import {configureStore} from 'redux-mock-store'
import thunk from 'redux-thunk'
import {registroPeliAsync} from '../../actions/actionPeli'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const state={}
let store= mockStore(state)

describe('Prueba firebase de Pelicula', () =>{
    beforeEach(() =>{
        store= mockStore(state)
    })
    test('Carga nueva pelicula', () =>{
        store.dispatch(registroPeliAsync({
            nombre:'prueba',
            genero: 'prueba',
            imagen:'prueba'
        }))
        const stateMovie= store.getState(
            expect(stateMovie).toEqual({
                nombre:'prueba',
                genero: 'prueba',
                imagen:'prueba'
            })
        )
    })
})