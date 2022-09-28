import React, { useEffect, useState } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { url } from '../helpers/url'

const Slider = () => {

  const [peliculasSlider, setSliderItem] = useState([])

  async function llenarSlider() {
    const data = await fetch(url)
      .then(res => res.json()
      )
    setSliderItem(data.results.sort(() => Math.random() > 0.50 ? 1 : -1).slice(0.5));
  }

  useEffect(() => {
    llenarSlider()
  }, [])

  return (
    <div>
      <Carousel>

        {
          peliculasSlider.map(peli => (

            <Carousel.Item className='sliderContainer' interval={2000} key={peli.id}>
              <img className='imgSlider'
                className="d-block w-100"
                src={`https://www.themoviedb.org/t/p/w1440_and_h320_multi_faces` + peli.backdrop_path}
                alt={peli.title}
              />

              <div className='btnSldrContainer'>
                <Button onClick={() => console.log(peli, 'adsd')} className='btnSlider1'>VER AHORA</Button>
                <Button className='btnSlider2'><Link className='linkslider' to="/registroPeli">+ VER DESPUÉS</Link></Button>
              </div>
            </Carousel.Item>
          ))
        }

      </Carousel>
    </div>
  )


}

export default Slider