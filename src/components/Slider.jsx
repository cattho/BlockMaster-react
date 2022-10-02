import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
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
    <>
      <Carousel>

        {
          peliculasSlider.map(peli => (

            <Carousel.Item className='sliderContainer' interval={2500} key={peli.id}>
              <img className='imgSlider d-block w-100'
                src={`https://www.themoviedb.org/t/p/w1440_and_h320_multi_faces` + peli.backdrop_path}
                alt={peli.title}
              />
            </Carousel.Item>
          ))
        }

      </Carousel>
    </>
  )


}

export default Slider