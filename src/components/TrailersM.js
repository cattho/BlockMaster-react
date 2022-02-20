import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

const TrailersM = () => {
  return (
    <div>
        <h1 className='labelWords'>Algunos Trailers de nuestras peliculas</h1>
        <CardGroup>
                <Card className='cardLogin'>
                <iframe width="250" height="500" src="https://www.youtube.com/embed/nZ8FXOpcXSs" title='Venom'></iframe>
                    <Card.Body>
                    <Card.Title className='labelWords'>Venom</Card.Title>
                    <Card.Text className='labelWords'>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='cardLogin'>
                <iframe width="250" height="500" src="https://www.youtube.com/embed/-UhtvnTQhHQ" title="Spider-man" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <Card.Body>
                    <Card.Title className='labelWords'>Spider-Man: No way home 2</Card.Title>
                    <Card.Text className='labelWords'>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>                    
                </Card>

                <Card className='cardLogin'>
                <iframe width="250" height="500" src="https://www.youtube.com/embed/2OMixTIRQcY" title="Sonic-2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <Card.Body>
                    <Card.Title className='labelWords'>Sonic 2</Card.Title>
                    <Card.Text className='labelWords'>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card className='cardLogin'>
                <iframe width="250" height="500" src="https://www.youtube.com/embed/qehG9dKVDG4" title="JurassicWord3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <Card.Body>
                    <Card.Title className='labelWords'>Jurassic World 3</Card.Title>
                    <Card.Text className='labelWords'>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='cardLogin'>
                <iframe width="250" height="500" src="https://www.youtube.com/embed/D9AzGVmMVpk" title="DoctorStrange2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    <Card.Body>
                    <Card.Title className='labelWords'>Doctor Strange 2 </Card.Title>
                    <Card.Text className='labelWords'>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                    </Card.Body>
                </Card>
</CardGroup>
    </div>
  )
}

export default TrailersM