
import React, {useEffect, useState} from 'react';
import './Profile.css';

import { useNavigate } from 'react-router-dom';

//Imports de RDX
//primero importo métodos que me permitirán conectarme para leer y modificar en redux
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { listUserRents } from '../../../services/apiCalls.js';

import { CardRent } from '../../../common/CardRent/CardRent';

export const Profile = () => {

    //Instancio useNavigate
    const navigate = useNavigate();

    //Instancio RDX
    const userRDX = useSelector(userData);
    const [rents, setRents] = useState([]);
    // Intenté hacerlo con async await pero entraba en bucle
    useEffect(() => { 
        if (!rents?.length) {
            listUserRents(userRDX.userPass.user._id, userRDX.userPass.token).then( rentals => {
                setRents(rentals)
            })        
        }
    }, [rents]);


    return (
        <div className='profileDesign'>
            <div className='yourRents'>
            Estos son tus alquileres {userRDX.userPass.user.name}
            </div>

            <div>
                {rents.length ? (<div className='rosterDesignProfile'>
                    {rents.map(
                        rent => {
                            return (
                                <div onClick={() => Choosen(rent)} key={rent.id}>
                                    <CardRent serie={rent} />
                                </div>
                            )
                        }
                    )}
                </div>) : (<div><img className="loadingGif" /></div>)}
            </div>
        </div>
    )
}