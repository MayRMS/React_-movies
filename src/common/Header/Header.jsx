
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from './camera.png';

import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/User/userSlice";
import { serieData, find, clear } from '../../pages/serieSlice';
import { InputText } from '../InputText/InputText';
import { getSearch } from '../../services/apiCalls';

export const Header = () => {

    const dispatch = useDispatch();
    const initial = {
        token: '',
        user: {}
    }

    const[search , setSearch] = useState([]);

    const datosReduxUsuario = useSelector(userData);
    const datosReduxSeries = useSelector(serieData)

    const saveSeries = async (token) => {
        const res =  await getSearch(search,token)
        dispatch(find({series : res.data.serie.results}))
    }
    useEffect(()=>{
        const token = datosReduxUsuario.userPass.token
        console.log(search)
        if(search.length){
            saveSeries(token)
        } else if(search === "" && datosReduxSeries.serie.length > 0) {
            dispatch(clear({choosen : {}, series: []}));
        } 

    },[search])

    const navigate = useNavigate();

    const logOff = () => {
        dispatch(logout({ userPass: initial }))

        navigate("/")
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const ResetHome = () => {
        dispatch(clear({choosen : {}, series: []}));
        navigate("/")
    }

    const searchErrorHandler = () => {
        console.log("check errors in search");
    }

    return (
        <div className='headerDesign'>
            <div onClick={()=>ResetHome()} className='logoDesignHeader'><img className='cameraAvatar' src={Logo} alt="Camara"/></div>
            <div className='searchDesign'>

                <InputText 
                    type={"text"} 
                    name={"search"} 
                    className={'inputDesign'} 
                    placeholder={"Search something"} 
                    functionHandler={handleSearch} 
                    errorHandler={searchErrorHandler}
                />
            </div>

            <div className='headerLinksDesign'>
                {datosReduxUsuario?.userPass?.user?.admin && <div onClick={()=>navigate("/admin")} className='linkDesign'>Admin</div>}
                {datosReduxUsuario.userPass.token ?

                    (<>
                        <div onClick={()=>navigate("/profile")} className='linkDesign' >{datosReduxUsuario.userPass?.user?.name}</div>
                        <div className='linkDesign' onClick={() => logOff()}>Logout</div>
                    </>)


                    : (//Entraremos en el else si el token que hay en Redux está vacio (comillas vacias.)....
                        //La primera vez que entramos en la aplicación, siempre entrará aquí por defecto

                        <>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/login") }, 200)}>Login</div>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/register") }, 200)}>Register</div>
                        </>
                    )
                }

            </div>
        </div>


    );


};


