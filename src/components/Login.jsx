import React, { Fragment } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { GoogleAsyncLogin, loginEmailPassword } from '../actions/loginAction'
import { useForm } from '../hooks/useForm'

function Login() {

  const dispatch = useDispatch()

  const handleGoogleAsync = () => {
    dispatch(GoogleAsyncLogin())
  }

  const [datos, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = datos

  const handleLoginEmailPassword = () => {
    dispatch(loginEmailPassword(email, password))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <div className="imgloginContainer">
          <img className='img-login' src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643834025/block-master/logo-blockBuster_cyylkd.png' alt='Block-Master-Logo' />
        </div>
        <label >
          Correo
          <input
            type="text"
            placeholder="Ingresa tu correo electrónico"
            name="email"
            value={email}
            onChange={handleInputChange} />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            name="password"
            value={password}
            onChange={handleInputChange} />
        </label>

        <div className='btnLgn'>
          <Button className='btnlgn1' type='submit' onClick={handleLoginEmailPassword}>Ingresar</Button>
          <Button className='btnggl'><img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" onClick={handleGoogleAsync} /></Button>
        </div>

        <label>¿No tienes una cuenta? <Link className='comeBack' to="/registro">Registrate</Link></label>
        

      </form>
    </div>
  )
}

export default Login;