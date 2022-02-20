import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { registroEmailPasswordNombre } from '../actions/actionRegister'
import { useForm } from '../hooks/useForm'

export const Register = () => {

    const dispatch= useDispatch();

    const[formData,handleInputChange]=useForm({
        nombre:'',
        email:'',
        pass1:'',
        pass2:''
      })

      const {nombre,email,pass1,pass2}=formData

      const handleRegistro = (e) =>{
          e.preventDefault();
          dispatch(registroEmailPasswordNombre(email,pass1,nombre))
      }

  return (
    <div className='formContainer'>
         <Form className='formu' onSubmit={handleRegistro}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='labelWords'>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='darkWords'>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='darkWords'>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        value={pass1}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label className='darkWords'>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        value={pass2}
                        onChange={handleInputChange}
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Registrarse
                </Button>

                <Link to="/login">Login</Link>

            </Form>
    </div>
  )
}
