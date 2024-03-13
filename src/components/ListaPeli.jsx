import React from "react";
import { Button, Card, CardGroup, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteAsync } from "../actions/actionPeli";

const ListaPeli = () => {
  const { pelicula } = useSelector((store) => store.peliculas);
  const dispatch = useDispatch();

  return (
    <div className='card-container'>
      {pelicula && pelicula.length > 0 ? (
        pelicula.map((peli, index) => (
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img variant='top' src={peli.imagen} />
            <Card.Body>
              <Card.Title>{peli.nombre.toUpperCase()}</Card.Title>
              <Card.Text>Genero: {peli.genero}</Card.Text>
              <Button
                variant='warning'
                onClick={() => {
                  Swal.fire({
                    title: "¿Estas Seguro?",
                    text: "No podras revertir los cambios!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si, eliminala!",
                    cancelButtonText: "Cancelar",
                    background: "#0f0e17",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      dispatch(deleteAsync(peli.nombre));
                      Swal.fire({
                        icon: "success",
                        text: "Pelicula eliminada con exito",
                        background: "#0f0e17",
                        confirmButtonColor: "#FED941",
                      });
                    }
                  });
                }}
              >
                Eliminar
              </Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p style={{ color: "#fff" }}>Datos no disponibles</p>
      )}
    </div>
  );
};

export default ListaPeli;
