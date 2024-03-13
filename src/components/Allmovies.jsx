import React, { useEffect, useState } from "react";
import { Button, Card, Container, Pagination } from "react-bootstrap";
import Swal from "sweetalert2";
import { url, urlImg } from "../helpers/url";

const Allmovies = () => {
  const [cards, setCards] = useState([]);
  const [paginacion, setPaginacion] = useState(1);
  const [primerPagina, setPrimerPagina] = useState(true);

  const ActivarModal = (id) => {
    cards.filter((mostrar) => mostrar.id === id);
  };

  useEffect(() => {
    const llenarCards = async () => {
      try {
        const response = await fetch(url + `&page=${paginacion}`);
        const data = await response.json();
        setCards(data.results);
      } catch (error) {
        console.error("Error al obtener los datos de la API", error);
      }
    };
    llenarCards();

    paginacion == 1 ? setPrimerPagina(true) : setPrimerPagina(false);
  }, [paginacion]);

  return (
    <Container fluid>
      <h1 className='labelWords'>Todas las peliculas</h1>
      <div className='card-container '>
        {cards.map((p) => (
          <Card
            key={p.id}
            className='card'
            onClick={() =>
              ActivarModal(
                Swal.fire({
                  title: `${p.title}`,
                  text: `${p.overview}`,
                  imageUrl: `${`${urlImg}` + p.backdrop_path}`,
                  imageWidth: 500,
                  imageHeight: 300,
                  imageAlt: `${p.title}`,
                  background: "#0f0e17",
                  color: "#FFFFFF",
                  backdrop: "swal2-backdrop-hide",
                  confirmButtonColor: "#FED941",
                  confirmButtonText: "Aceptar",
                })
              )
            }
          >
            <img
              className='card-img'
              src={`${urlImg}` + p.poster_path}
              alt={p.title}
            />
          </Card>
        ))}
      </div>
      <Pagination className='pagContainer'>
        <Button
          disabled={primerPagina}
          className='btnpg'
          onClick={() => {
            setPaginacion(paginacion - 1);
          }}
        >
          Anterior{" "}
        </Button>
        <Button
          className='btnpg'
          onClick={() => {
            setPaginacion(paginacion + 1);
          }}
        >
          Siguiente
        </Button>
      </Pagination>
    </Container>
  );
};

export default Allmovies;
