
import React, {useState} from 'react';
import './SerieDetail.css';

import dayjs from 'dayjs';

import { useNavigate } from 'react-router-dom';

//Imports RDX
import { useSelector } from "react-redux";
import { serieData } from '../serieSlice';
import { userData } from '../User/userSlice';
import { poster_default } from '../../services/utiles';
import { postRent } from '../../services/apiCalls';

export const SerieDetail = () => {

    //Instanciar los datos de Redux...

    //Aqui me traigo los estados de redux, de ambos slices, es decir....

    //Primero me traigo los datos de la serie (detailRdx) y luego de user (detailUsr)
    //estos contienen todos los detalles de la película que mostramos y del usuario logeado
    const detailRdx = useSelector(serieData);
    const detailUsr = useSelector(userData);

    //Instancia navigate....
    const navigate = useNavigate();

    const [msg, setMsg] = useState('');

    const rent = async()=>{
        const rent = await postRent(detailUsr.userPass.user._id,detailRdx.choosen.id, detailUsr.userPass.token )
        setTimeout(()=>{
            navigate('/profile');
        },500);
    }


    return(
        <div className='serieDesign'>
            {detailRdx.choosen.id !== '' &&
            
                <div className='serieDetailCard'>
                    <div>{detailRdx.choosen.name}</div>

                    {detailRdx.choosen.original_name !== detailRdx.choosen.name &&

                        <div>{detailRdx.choosen.original_name}</div>
                    }
                    <div><img className='detailPoster' src={`${poster_default}${detailRdx.choosen.poster_path}`}/></div>
                    <div>{detailRdx.choosen.first_air_date}</div>
                    <div>{detailRdx.choosen.overview !== '' ? detailRdx.choosen.overview : "No overview available"}</div>

                    {detailUsr.userPass.token !== '' &&
                    
                        <div onClick={()=>rent()} className='rentDesign'>RENT</div>
                    }

                    <div>{msg}</div>
                </div>
            
            }
        </div>
    )

}