import React, { useEffect, useState } from 'react'
import { Button, Pagination } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { url } from '../helpers/url'



const Allmovies = () => {
  
  const [cards, setCards] = useState([])
  const [paginacion, setPaginacion] = useState(1)
 

  const llenarCards = async () => {
    const data = await fetch(url + `&page=${paginacion}`)
      .then(resp => resp.json())

    setCards(data.results)
  }

  const ActivarModal = (id) => {
     cards.filter((mostrar) => (
      mostrar.id === id      
    )) 
  }

  useEffect(() => {
    llenarCards()    
  }, [])

  return (
    <div>
      <h1 className='labelWords'>Todas las peliculas</h1>
      <div className='card-container'>
        {
          cards.map(p => (
            <div key={p.id} className='card' onClick={() => ActivarModal(Swal.fire({
              title: `${p.title}`,
              text: `${p.overview}`,
              imageUrl: `${`https://image.tmdb.org/t/p/w1280` + p.backdrop_path}`,
              imageWidth: 500,
              imageHeight: 300,
              imageAlt: `${p.title}`,
              background:'#0f0e17',
              backdrop: 'swal2-backdrop-hide',
              confirmButtonColor:'#FED941',
              confirmButtonText:'Aceptar'
            }))}>
              <img className='card-img' src={`https://image.tmdb.org/t/p/w1280` + p.poster_path} alt={p.title} />
            </div>
          ))

        }
      </div>
      <Pagination className='pagContainer'>
        <Button className='btnpg' onClick={() => { setPaginacion(paginacion - 1); llenarCards() }}>Anterior </Button>
        <Button className='btnpg' onClick={() => { setPaginacion(paginacion + 1); llenarCards() }}>Siguiente</Button>
      </Pagination>

    </div>
  )
}

export default Allmovies