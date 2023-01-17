
import React from 'react';

import {useNavigate} from 'react-router-dom';

import './Header.css';

export const Header = () => {

    //Instanciamos el método useNavigate para poder utilizarlo

    const navigate = useNavigate();

    
    return (
        <div className='headerDesign'>
            <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate("/login")},200)}>login</div>
            <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate("/register")},200)}>register</div>
        </div>
    );
};