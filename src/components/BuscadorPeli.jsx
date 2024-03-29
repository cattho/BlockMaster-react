import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { logout } from "../actions/loginAction";

const BuscadorPeli = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.buscador.value.trim();

    if (keyword.length === 0) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Debes escribir una palabra",
        confirmButtonColor: "#FED941",
        confirmButtonText: "Aceptar",
        background: "#0f0e17",
        color: "#FFFFFF",
        timer: 2000,
      });
      return;
    } else if (keyword.length < 4) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Debes escribir más de cuatro caracteres",
        confirmButtonColor: "#FED941",
        confirmButtonText: "Aceptar",
        background: "#0f0e17",
        color: "#FFFFFF",
        timer: 2000,
      });
      e.target.buscador.value = "";
      return;
    } else {
      navigate(`/resultados?keyword=${keyword}`);
      e.target.buscador.value = "";
    }
  };

  return (
    <div>
      <Form className='d-flex container-src' onSubmit={handleSubmit}>
        <input
          type='search'
          name='buscador'
          placeholder='Busca tu pelicula favorita'
          className='me-2 input-nav'
          aria-label='Search'
          autoComplete='off'
        />
        <div className='btn-container-Nav'>
          <Button type='submit' className='btn-src-nav'>
            Buscar
          </Button>
          <Button className='btn-src-nav' onClick={handleLogOut}>
            Desconectar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default BuscadorPeli;
