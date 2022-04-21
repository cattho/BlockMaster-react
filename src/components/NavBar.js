import React, { useState } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/loginAction';
import {url, urlBuscador} from '../helpers/url'



const NavBar = () => {  

  const [buscador, setBuscador] = useState('')
  const dispatch = useDispatch();
  

 const buscando = () =>{
    var busqueda= ''
    if(buscador.length > 0){
      busqueda= urlBuscador + buscador
    }else{
      busqueda= url
    }
    setBuscador(busqueda)
  }

  
  function actualizarBusqueda(e){
    setBuscador(e.target.value);
  }

  console.log(buscador);


  // ojo hacer el logout!!!!!!!!!!
  const handleLogOut = () =>{
      dispatch(logout())
  }
  

  return (
    <div>
      <Navbar className='Navbar' expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/"><img className='img-nav' src='https://res.cloudinary.com/dfp8qduho/image/upload/v1643834025/block-master/logo-blockBuster_cyylkd.png' alt='Block-Master-Logo' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='white' as={Link} to="/">Todas</Nav.Link>
              <Nav.Link className='white' as={Link} to="/MasValoradas">Más valoradas</Nav.Link>
              <Nav.Link className='white' as={Link} to="/MenosValoradas">Menos valoradas</Nav.Link>
              <Nav.Link className='white' as={Link} to="/registroPeli">registra tu peli</Nav.Link>
            </Nav>
            <Form className="d-flex">          
              <FormControl
                type="search"
                placeholder="Busca tu pelicula favorita"
                className="me-2"
                aria-label="Search"
                onChange={actualizarBusqueda}                          
              />
              <Button onClick={() =>{buscando()}} className='btnNav'>Buscar</Button>
              <Button className='btnNav' onClick={() =>{handleLogOut()}}><Link to="/login">Desconectar</Link></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
};

export default NavBar;
