import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { peliTypes } from "../types/types"


// Eliminando peli
export const deleteAsync = (nombre) => {
    return async (dispatch) => {
        const deleteCollection = collection(db, 'PeliculaCarga')
        const q = query(deleteCollection, where("nombre", "==", nombre))
        const querySnapshot = await getDocs(q)

        querySnapshot.forEach(documento => {
            deleteDoc(doc(db, 'PeliculaCarga', documento.id))
                .then(res => {
                    console.log(res);
                    dispatch(deleteSync(nombre))
                }).catch(error => {
                    console.log(error);
                })
        })
    }
}


export const deleteSync = (nombre) => {
    return {
        type: peliTypes.eliminar,
        payload: nombre
    }
}



// listando las pelis
export const peliListAsync = () => {
    return async (dispatch) => {
        const obtenerDatos = await getDocs(collection(db, 'PeliculaCarga'))
        const pelicula = []
        obtenerDatos.forEach((peliEnlista) => {
            pelicula.push({
                ...peliEnlista.data()
            })
        })
        dispatch(peliList(pelicula))
    }
}


export const peliList = (pelicula) => {
    return {
        type: peliTypes.listar,
        payload: pelicula
    }
}


// registro peli
export const registroPeliAsync = (nombre, genero, imagen) => {
    return (dispatch) => {
        const newPeli = {
            nombre, genero, imagen
        }
        addDoc(collection(db, "PeliculaCarga"), newPeli)
            .then(resp => {
                dispatch(registroPeliSync(newPeli))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const registroPeliSync = (pelicula) => {
    return {
        type: peliTypes.registro,
        payload: pelicula
    }
}