import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { urlImg } from '../helpers/url';

const Resultados = () => {
    const [movieResults, setMovieResults] = useState([]);
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword');

    useEffect(() => {
        let search = `https://api.themoviedb.org/3/search/movie?api_key=b13380038de893f71e7579d0621ed600&query=${keyword}&language=es-ES`
        axios
            .get(search)
            .then(r => {
                const res = r.data.results;
                setMovieResults(res);
            }).catch(error => {
                throw error
            })

    }, [movieResults]);

    return (
        <>
            <h1 className='labelWords'>Resultados para: {keyword.toUpperCase()}</h1>
            <div className="row">
                {
                    movieResults.map(p => (
                        <div key={p.id} className='card' onClick={() =>Swal.fire({
                            title: `${p.title}`,
                            text: `${p.overview.substring(0, 100)}...`,
                            imageUrl: `${`${urlImg}` + p.backdrop_path}`,
                            imageWidth: 500,
                            imageHeight: 300,
                            imageAlt: `${p.title}`,
                            background: '#0f0e17',
                            color: '#FFFFFF',
                            backdrop: 'swal2-backdrop-hide',
                            confirmButtonColor: '#FED941',
                            confirmButtonText: 'Aceptar'
                        })}>
                            <img className='card-img' src={`${urlImg}` + p.poster_path} alt={p.title} />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Resultados