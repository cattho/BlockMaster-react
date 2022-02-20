import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { GoogleLg } from '../firebase/firebaseConfig'
import { types } from '../types/types'


export const logout= () =>{
      return(dispatch) =>{
        const auth= getAuth()
        signOut(auth)
        .then((user) =>{
          console.log('Te haz desconectado');
        })
        .catch(error=>{
          console.log(error);
        })
      }
}


export const loginEmailPassword= (email,password) =>{
  return(dispatch) =>{
    const auth= getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .then(({user}) =>{
      dispatch(
        loginSincrono(user.uid,user.displayName)
      )
      console.log('Estas logueado');
    })
    .catch(error =>{
      console.log(error);
    })
  }
}


export const GoogleAsyncLogin =() =>{
  return(dispatch) =>{
    const auth = getAuth()
    signInWithPopup(auth, GoogleLg)
    .then(({user})=>{
      dispatch(loginSincrono(user.uid, user.displayName))
    })
    .catch(error =>{
      console.log(error);
    })
  }
}


export const loginSincrono = (uid,displayName) => {
  return {
        type: types.login,
        payload:{
            id: uid,
            name:displayName
        }
  }
}
