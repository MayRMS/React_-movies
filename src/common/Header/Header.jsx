
import React, {useEffect} from 'react';

import {useNavigate} from 'react-router-dom';

import './Header.css';

//RDX Imports
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/User/userSlice";

export const Header = () => {

    const dispatch = useDispatch();
    const initial = {
        token : '',
        user : {}
    }

    //Instancio métodos de Redux
    const datosReduxUsuario = useSelector(userData);

    useEffect(()=>{
        console.log(datosReduxUsuario);
    })

    //Instanciamos el método useNavigate para poder utilizarlo

    const navigate = useNavigate();

    if(datosReduxUsuario.userPass.token !== ""){
        return (
            <div className='headerDesign'>
                <div className='linkDesign' >{datosReduxUsuario.userPass?.user?.name}</div>
                <div className='linkDesign' onClick={()=>dispatch(logout({userPass : initial}))}>logout</div>
            </div>
        );

    } else {
        return (
            <div className='headerDesign'>
                <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate("/login")},200)}>login</div>
                <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate("/register")},200)}>register</div>
            </div>
        );
    }
    
    
};