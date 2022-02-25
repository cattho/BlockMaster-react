import { loginEmailPassword, logout } from "../actions/loginAction";


describe('Pruebas de autenticacion de usuario', () =>{

    test('Login usuario', () => {
        const Auth= loginEmailPassword
        if(Auth){
            console.log('usuario conectado');
        }else{
            throw new Error('Usuario no conectado')
        }
    })

    test('LogOut de usuario', () => {
        const logOutUser= logout
        if(logOutUser){
            console.log('Usuario desconectado');
        }else{
            console.log('Usuario conectado');
        }
    })
})