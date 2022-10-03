import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { fileUpload } from '../helpers/fileUpload'
import { peliListAsync, registroPeliAsync } from '../actions/actionPeli'
import ListaPeli from './ListaPeli'


const RegisPeli = () => {
    const dispatch = useDispatch()
    const [datos, handleInputChange] = useForm({
        nombre: '',
        imagen: '',
        genero: ''
    })

    let { nombre, imagen, genero } = datos;


    const handleFilechanged = async e => {
        const file = e.target.files[0]
        await fileUpload(file)
            .then(r => {
                imagen = r;
                console.log(r);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registroPeliAsync(nombre, genero, imagen));
    }

    useEffect(() => {
        dispatch(peliListAsync())
    }, [])

    return (
        <div className='formregisPeli'>
            <form onSubmit={handleSubmit}>
                <h1 className='labelWords'>Registra tu pelicula</h1>
                <div className="form-group">
                    <div className="form-group col-md-12">
                        <label className='labelWords' htmlFor="nombre">Nombre de tu pelicula</label>
                        <input className="form-control inputRegisPeli"
                            type="text"
                            name="nombre"
                            id="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                            required />
                    </div>

                    <div className="form-group col-md-12">
                        <label className='labelWords' htmlFor="genero">Genero de tu pelicula</label>
                        <input className="form-control inputRegisPeli"
                            type="text"
                            name="genero"
                            id="genero"
                            value={genero}
                            onChange={handleInputChange}
                            required />
                    </div>

                    <div className="form-group col-md-12">
                        <label className='labelWords' htmlFor="imagen">Poster de tu pelicula</label>
                        <input
                            className='fileInputRg'
                            type='file'
                            name='imagen'
                            id='imagen'
                            onChange={handleFilechanged}
                        />
                        <div className="btn-container-res">
                            <button type='submit' className="btn-src-nav btn-rgt" onClick={fileUpload}>Enviar Peli</button>
                        </div>

                    </div>
                </div>
            </form>
            <ListaPeli />
        </div>
    )
}

export default RegisPeli