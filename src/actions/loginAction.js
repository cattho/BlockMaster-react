import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import Swal from 'sweetalert2'
import { GoogleLg } from '../firebase/firebaseConfig'
import { types } from '../types/types'


export const logout = () => {
  return (dispatch) => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Te haz desconectado',
          background: '#0f0e17',
          color: '#FFFFFF',
          showConfirmButton: false,
          timer: 2000
        });
      })
      .catch(error => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Operacion no valida',
          background: '#0f0e17',
          color: '#FFFFFF',
          showConfirmButton: false,
          timer: 1500
        });
      })
  }
}

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          loginSincrono(user.uid, user.displayName),
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido!',
            showConfirmButton: false,
            background: '#0f0e17',
            color: '#FFFFFF',
            timer: 2000
          })
        )
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          text: 'Datos ingresados invalidos',
          background: '#0f0e17',
          confirmButtonColor: '#FED941',
          confirmButtonText: 'Aceptar'
        })
      })
  }
}


export const GoogleAsyncLogin = () => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, GoogleLg)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName))
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bienvenido!',
          showConfirmButton: false,
          background: '#0f0e17',
          color: '#FFFFFF',
          timer: 2000
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
}


export const loginSincrono = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      id: uid,
      name: displayName
    }
  }
}
