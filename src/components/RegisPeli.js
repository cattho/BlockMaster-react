import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { fileUpload } from '../helpers/fileUpload'
import { peliListAsync, registroPeliAsync } from '../actions/actionPeli'
import ListaPeli from './ListaPeli'


const RegisPeli = () => {    
    const dispatch = useDispatch()
    const [datos, handleInputChange]=useForm({
        nombre:'',
        imagen:'',
        genero:''
    })

    let {nombre, imagen, genero} = datos

   
   const handleFilechanged= e =>{
        const file= e.target.files[0]
        fileUpload(file)
        .then(response =>{
            imagen= response;
            console.log(response, 'buenardo');
        })
        .catch(error =>{
            console.log(error.message, 'malazo')
        })
    }

    const handleSubmit= (e) =>{
        e.preventDefault();        
        dispatch(registroPeliAsync(nombre,genero,imagen))       
    }

    useEffect(() => {
        dispatch(peliListAsync())      
     }, [])  
 
  return (
    <div className='formregisPeli'>
        <form onSubmit={handleSubmit}>
                <h1 className='labelWords'>Registra tu pelicula</h1>
                <div className="form-group">                   
                    <div className="form-group col-md-4">
                        <label className='labelWords' htmlFor="nombre">Nombre de tu pelicula</label>
                        <input className="form-control" type="text" name="nombre" id="nombre" value={nombre} onChange={handleInputChange} required />
                    </div>
                   
                    <div className="form-group col-md-4">
                        <label className='labelWords' htmlFor="genero">Genero de tu pelicula</label>
                        <input className="form-control" type="text" name="genero" id="genero" value={genero} onChange={handleInputChange} required />
                    </div>

                    <div className="form-group col-md-4">
                        <label className='labelWords' htmlFor="imagen">Poster de tu pelicula</label>
                        <input type='file' name='imagen' id='imagen' onChange={handleFilechanged} />
                        <br />
                        <button type='submit' className="btn btn-success">Enviar Peli</button>
                    </div>
                </div>
            </form>
            <ListaPeli />
    </div>
  )
}

export default RegisPeli