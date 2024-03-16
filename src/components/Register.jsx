import React from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registroEmailPasswordNombre } from "../actions/actionRegister";
import { useForm } from "../hooks/useForm";

export const Register = () => {
  const dispatch = useDispatch();

  const [formData, handleInputChange] = useForm({
    nombre: "",
    email: "",
    pass1: "",
    pass2: "",
  });

  const { nombre, email, pass1, pass2 } = formData;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(registroEmailPasswordNombre(email, pass1, nombre));
  };

  return (
    <div className='formContainer'>
      <Form className='formu' onSubmit={handleRegistro}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label className='darkWords'>Nombre</Form.Label>
          <Form.Control
            type='text'
            placeholder='Ingresa tu nombre'
            name='nombre'
            value={nombre}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='darkWords'>Correo</Form.Label>
          <Form.Control
            type='email'
            placeholder='Ingresa tu correo electrónico'
            name='email'
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label className='darkWords'>Contraseña</Form.Label>
          <Form.Control
            type='password'
            placeholder='Ingresa una contraseña'
            name='pass1'
            value={pass1}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicRepitPassword'>
          <Form.Label className='darkWords'>Repita contraseña</Form.Label>
          <Form.Control
            type='password'
            placeholder='Repite la contraseña'
            name='pass2'
            value={pass2}
            onChange={handleInputChange}
          />
        </Form.Group>

        <div className='btnLgn'>
          <button className='btnlgn1' type='submit'>
            Registrarse
          </button>
          <Link className='comeBack' to='/login'>
            Volver al inicio de sesion
          </Link>
        </div>
      </Form>
    </div>
  );
};
