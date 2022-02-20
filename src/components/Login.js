import React, { Fragment }  from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { GoogleAsyncLogin, loginEmailPassword} from '../actions/loginAction'
import { useForm } from '../hooks/useForm'
import TrailersM from './TrailersM'

function Login () {

      const dispatch = useDispatch()
      

      const handleGoogleAsync= () =>{
        dispatch(GoogleAsyncLogin())
      }

      const[datos,handleInputChange]=useForm({
        email:'',
        password:''
      })

      const{email,password}= datos

      const handleLoginEmailPassword= () =>{
        dispatch(loginEmailPassword(email,password))
      }

      const handleSubmit= (e) =>{
        e.preventDefault()        
      }

  return (
    <div className='formContainer'>
         <Form className='formLogin' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='labelWords'>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}                   
                     />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='labelWords' >Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}                    
                    />
            </Form.Group>
           
              <div className='btnLgn'>
                <Button className='btnlgn1' type='submit' onClick={() =>handleLoginEmailPassword()}>Ingresar</Button>
                <Button className='btnggl'><img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" onClick={() =>handleGoogleAsync()} /></Button>
              </div>
            
            <Form.Label className='labelWords'>¿No tienes una cuenta? </Form.Label>
            <Link to="/registro"> Registrate</Link>
            </Form>   
            <TrailersM />         
    </div>
  )}

export default Login;