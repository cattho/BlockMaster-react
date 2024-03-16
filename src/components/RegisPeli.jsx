import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { fileUpload } from "../helpers/fileUpload";
import { peliListAsync, registroPeliAsync } from "../actions/actionPeli";
import ListaPeli from "./ListaPeli";

const RegisPeli = () => {
  const dispatch = useDispatch();
  const [datos, handleInputChange] = useForm({
    nombre: "",
    imagen: null,
    genero: "",
  });

  let { nombre, imagen, genero } = datos;

  const handleFilechanged = (e) => {
    const file = e.target.files[0];
    handleInputChange({ target: { name: "imagen", value: file } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrl = await fileUpload(imagen);
      dispatch(registroPeliAsync({ nombre, genero, imagen: imageUrl }));
    } catch (error) {
      console.log("Error al cargar la imagen:", error);
    }
  };

  useEffect(() => {
    dispatch(peliListAsync());
  }, []);

  return (
    <div className='formregisPeli'>
      <form onSubmit={handleSubmit}>
        <h1 className='labelWords'>Registra tu pelicula</h1>
        <div className='form-group'>
          <div className='form-group col-md-12'>
            <label className='labelWords' htmlFor='nombre'>
              Nombre de tu pelicula
            </label>
            <input
              className='form-control inputRegisPeli'
              type='text'
              name='nombre'
              id='nombre'
              value={nombre}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='form-group col-md-12'>
            <label className='labelWords' htmlFor='genero'>
              Genero de tu pelicula
            </label>
            <input
              className='form-control inputRegisPeli'
              type='text'
              name='genero'
              id='genero'
              value={genero}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='form-group col-md-12'>
            <label className='labelWords' htmlFor='imagen'>
              Poster de tu pelicula
            </label>
            <input
              className='fileInputRg'
              type='file'
              name='imagen'
              id='imagen'
              onChange={handleFilechanged}
            />
            <div className='btn-container-res'>
              <button type='submit' className='btn-src-nav btn-rgt'>
                Enviar Pelicula
              </button>
            </div>
          </div>
        </div>
      </form>
      <ListaPeli />
    </div>
  );
};

export default RegisPeli;
