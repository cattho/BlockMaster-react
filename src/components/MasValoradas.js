import React, { useEffect, useState } from 'react'
import { Button, Pagination } from 'react-bootstrap'
import { url } from '../helpers/url'

const MasValoradas = () => {
  const [cards, setCards] = useState([])
  const [paginacion, setPaginacion] = useState(1)
  


  const llenarCards = async () => {
    const data = await fetch(url + `&page=${paginacion}`)
      .then(resp => resp.json())

    setCards(data.results)
  }

 
  useEffect(() => {
    llenarCards()
  }, [])

  return (
    <div>
      <h1 className='labelWords'>Más valoradas</h1>
      <div className='card-container'>

        {
          cards.filter(voto => voto.vote_average > 7.5).sort().map(p => (
            <div key={p.id} className='card'>
              <img className='card-img' src={`https://image.tmdb.org/t/p/w1280` + p.poster_path} alt={p.title} />
            </div>
          ))
        }


      </div>
      <Pagination className='pagContainer'>
        <Button className='btnpg' onClick={() => { setPaginacion(paginacion - 1); llenarCards(); }}>Anterior </Button>
        <Button className='btnpg' onClick={() => { setPaginacion(paginacion + 1); llenarCards() }}>Siguiente</Button>
      </Pagination>

    </div>
  )
}

export default MasValoradas