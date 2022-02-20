import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { deleteAsync } from '../actions/actionPeli';

const ListaPeli = () => {

    const dispatch = useDispatch();
    

    // Dibujando en la tabla
    const {pelicula} = useSelector(store => store.peliculas)
    // console.log(pelicula,'aca estoy en el componente');

  return (
    <div>
        <Table bg='dark' className='table' striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre de la pelicula</th>
                    <th>Imagen</th>
                    <th>Genero de la pelicula</th>
                </tr>
            </thead>
            <tbody>
                {
                    (pelicula) ?
                    (
                        pelicula.map((peli, index) =>(
                            <tr key={index}>
                                <td>{peli.nombre}</td>
                                <td><img src={peli.imagen} alt="" width='50px' /></td>
                                <td>{peli.genero}</td>

                                <td>
                                    <button
                                    onClick={() => dispatch(deleteAsync(peli.nombre, Swal.fire({
                                        title: '¿Estas Seguro?',
                                        text: "No podras revertir los cambios!",
                                        icon: 'warning',
                                        showCancelButton: true,
                                        confirmButtonColor: '#3085d6',
                                        cancelButtonColor: '#d33',
                                        confirmButtonText: 'Si, eliminala!',
                                        cancelButtonText: 'Cancelar',
                                        background: '#0f0e17'
                                      }).then((result) => {
                                        if (result.isConfirmed) {
                                          Swal.fire(
                                            'Eliminado!',
                                            'Tu peli ha sido borrada!!',
                                            'Exito'
                                          )
                                        }
                                      })))} 
                                    >Eliminar</button>
                                </td>
                            </tr>
                        ))
                    ):
                    <tr>
                        <td colSpan={3}>Datos no disponibles</td>
                    </tr>
                }
            </tbody>
        </Table>
    </div>
  )
}

export default ListaPeli