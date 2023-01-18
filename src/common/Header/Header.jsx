
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

//Importando imágenes.....
import Logo from './camera.png';

//RDX Imports

//primero importo métodos que me permitirán conectarme para leer y modificar en redux
import { useSelector, useDispatch } from "react-redux";
//a continuación, importo los datos del estado de la slice de user (userData) y la ACCION logout
import { userData, logout } from "../../pages/User/userSlice";

export const Header = () => {

    //Al instanciar dispatch, lo podré usar para emitir ACCIONES de REDUX
    const dispatch = useDispatch();
    //Initial es un objeto de JavaScript que es igual que el estado de redux por defecto, 
    //para pasárselo luego cuando haga el logout
    const initial = {
        token: '',
        user: {}
    }

    //Guardo en la constante datosReduxUsuario, los datos que me traigo del state de redux (userData)
    const datosReduxUsuario = useSelector(userData);

    useEffect(() => {
        //Este useEffect lo hago para saber que contiene Redux la slice de user realmente....
        console.log(datosReduxUsuario);
    })

    //Instanciamos el método useNavigate para poder utilizarlo

    const navigate = useNavigate();


    //Ejecuto el condicional if, para.....
    //Primero, en caso de que el token contenga algo que no sean comillas vacias, mostrar la opcion de logout y el nombre de usuario

    return (
        <div className='headerDesign'>
            <div onClick={()=>navigate("/")} className='logoDesignHeader'><img className='cameraAvatar' src={Logo} alt="Camara"/></div>
            <div className='searchDesign'></div>

            <div className='headerLinksDesign'>
                {/* Introducimos el logo, independientemente de lo que nos vaya a sacar después */}

                {datosReduxUsuario.userPass.token !== "" ?

                    (<>
                        <div className='linkDesign' >{datosReduxUsuario.userPass?.user?.name}</div>
                        {/* Para hacer logout, emitimos la accion logout desde el dispatch, dando como valor
    a userPass del estado de Redux el contenido de initial, es decir...lo reiniciamos o vaciamos,
    al no tener token ni datos de usuario, dejaremos de estar logeados */}
                        <div className='linkDesign' onClick={() => dispatch(logout({ userPass: initial }))}>logout</div>
                    </>)


                    : (//Entraremos en el else si el token que hay en Redux está vacio (comillas vacias.)....
                        //La primera vez que entramos en la aplicación, siempre entrará aquí por defecto

                        <>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/login") }, 200)}>login</div>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/register") }, 200)}>register</div>
                        </>
                    )
                }

            </div>
        </div>


    );


};


