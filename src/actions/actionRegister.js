import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { types } from "../types/types"

export const registroEmailPasswordNombre = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name })
                dispatch(synRegister(user.email, user.uid, user.displayName))
            })
            .catch(e => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'El correo electronico que ingresaste se encuentra en uso',
                    showConfirmButton: false,
                    background: '#0f0e17',
                    color:'#FFFFFF',
                    timer: 2000
                })
            })
    }
}



export const synRegister = (email, password, name) => {
    return {
        type: types.register,
        payload: {
            email,
            password,
            name
        }
    }
}

