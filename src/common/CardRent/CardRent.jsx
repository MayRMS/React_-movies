
import React, { useState } from 'react';
import { getSerieById } from '../../services/apiCalls';
import { poster_default } from '../../services/utiles';
import '../CardSerie/CardSerie.css';
import { useSelector } from "react-redux";
import { userData } from '../../pages/User/userSlice.js';
import { useEffect } from 'react';


export const CardRent = (rent) => {
    const [rental, setRent] = useState();
    const datosReduxUsuario = useSelector(userData);
    const fetchSerie = async () => {
        const serie = await getSerieById(rent.serie.idSerie, datosReduxUsuario.userPass.token)
        setRent(serie)
    } 
    //aquí si pude 
    useEffect(()=> {
        fetchSerie()
    }, [])
    return (
        <div>
            {rental ? ( 
            <div className='cardSerieDesign'>
                {/*<div>{rental.serie.name !== '' ? rental.serie.name : "Nombre no disponible"}</div> */}
                <div><img className='posterDesign' src={`${poster_default}${rental.serie.poster_path}`}/></div>
                <div>{rent.serie.returnDate !== '' ? rent.serie.returnDate : "TBA"}</div>
            </div>) 
            : (<div><img className="loadingGif" alt="Cargando" /></div>)}
        </div>
    )
}