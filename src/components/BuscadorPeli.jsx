import { Link } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { logout } from '../actions/loginAction';
import { url, urlBuscador } from '../helpers/url';

const BuscadorPeli = () => {
    const [buscador, setBuscador] = useState('')
    const dispatch = useDispatch();


    const buscando = () => {
        let busqueda = ''
        if (buscador.length > 0) {
            busqueda = urlBuscador + buscador
        } else {
            busqueda = url
        }
        setBuscador(busqueda)
    }

    function actualizarBusqueda(e) {
        setBuscador(e.target.value);
    }

    const handleLogOut = () => {
        dispatch(logout())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <Form className="d-flex" onSubmit={handleSubmit}>
                <FormControl
                    type="search"
                    placeholder="Busca tu pelicula favorita"
                    className="me-2"
                    aria-label="Search"
                    onChange={actualizarBusqueda}
                />
                <Button onClick={buscando} className='btnNav'>Buscar</Button>
                <Button className='btnNav' onClick={handleLogOut}><Link to="/login">Desconectar</Link></Button>
            </Form>
        </div>
    )
}

export default BuscadorPeli