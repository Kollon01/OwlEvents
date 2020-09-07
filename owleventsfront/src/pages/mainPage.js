
import React, {useState, useEffect} from 'react';
import { useQuery } from 'react-query'
import httpInstance from "../services/http.service";

const MainPage = () => {

    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`http://localhost:8001/api/services`).then(res =>  res.json())
    )

    if (isLoading) return 'Cargando...'

    if (error) return 'Ha ocurrido un error: ' + error.message

    let {totalItems, services, totalPages, currentPage} = data;

    return (

        <div className="App">
            <ul>
            {
                services.map(service => (
                    <li key={service.id}>{service.title} - {service.body}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default MainPage;