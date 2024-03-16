import React, { useEffect, useState } from "react";
import { Button, Container, Pagination } from "react-bootstrap";
import { url } from "../helpers/url";

const MasValoradas = () => {
  const [cards, setCards] = useState([]);
  const [paginacion, setPaginacion] = useState(1);
  const [primerPagina, setPrimerPagina] = useState(true);

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
      <h1 className='labelWords'>Más valoradas</h1>
      <div className='card-container'>
        {cards
          .filter((voto) => voto.vote_average > 7)
          .sort()
          .map((p) => (
            <div key={p.id} className='card'>
              <img
                className='card-img'
                src={`https://image.tmdb.org/t/p/w1280` + p.poster_path}
                alt={p.title}
              />
            </div>
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

export default MasValoradas;
