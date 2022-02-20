import { peliTypes } from "../types/types"



export const cargarpeli= (state={}, action ) =>{
    switch(action.type){
        case peliTypes.registro:
            return{
                nombre:action.payload.nombre,
                genero:action.payload.genero,
                imagen:action.payload.imagen
            }
        case peliTypes.listar:
            return{
                pelicula:[...action.payload]
            }

        case peliTypes.eliminar:
            return{
                pelicula: state.id.filter(est => est.id !== action.payload)
            }

        default:
            return state
    }    
}