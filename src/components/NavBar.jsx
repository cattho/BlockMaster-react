import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import BuscadorPeli from "./BuscadorPeli";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navbarImage =
    "https://res.cloudinary.com/dfp8qduho/image/upload/v1643834025/block-master/logo-blockBuster_cyylkd.png";

  useEffect(() => {
    const handlescroll = () => {
      window.scrollY > 0 ? setScrolled(true) : setScrolled(false);
    };

    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <Navbar
      className={`Navbar navbar-dark navbar-expand-lg ${
        scrolled ? "scrolled" : ""
      }`}
      expand='lg'
    >
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img className='img-nav' src={navbarImage} alt='Block-Master-Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto' navbarScroll>
            <Nav.Link className='white' as={Link} to='/'>
              Todas
            </Nav.Link>
            <Nav.Link className='white' as={Link} to='/MasValoradas'>
              Más valoradas
            </Nav.Link>
            <Nav.Link className='white' as={Link} to='/MenosValoradas'>
              Menos valoradas
            </Nav.Link>
            <Nav.Link className='white' as={Link} to='/registroPeli'>
              Registra tu pelicula
            </Nav.Link>
          </Nav>
          <BuscadorPeli />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
