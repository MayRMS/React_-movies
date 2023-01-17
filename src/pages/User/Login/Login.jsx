
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../common/InputText/InputText';
import { postLogin } from '../../../services/apiCalls';
import { Decoder } from '../../../services/utiles';

//RDX imports......
import { useSelector, useDispatch } from "react-redux";
import { login } from '../userSlice';

import './Login.css';

export const Login = () => {

    //Instancia de métodos de Redux
    const dispatch = useDispatch();

    //Hooks
    const [credenciales, setCredenciales] = useState({
        email: '',
        password: ''
    })

    //Variables y constantes
    const navigate = useNavigate();

    //Handlers
    const InputHandler = (e) => {
        
        //Bindear (atar)
        setCredenciales((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
        
        }));;
    }

    //Funciones
    const Logeame = () => {

        //Desde aqui llamamos al servicio....
        postLogin(credenciales)
            .then(
                resultado => {

                    //Ahora yo decodificaría el token... 

                    //Una vez decodificado, guardaría los datos de usuario y el token,
                    //ambas cosas en REDUX, para usarlas cuando yo quiera

                    let decodificado = Decoder(resultado);

                    let userPass = {
                        token : resultado,
                        user: decodificado.usuario[0]

                    }

                    //Finalmente, guardo en RDX....
                    dispatch(login({userPass: userPass}));

                    setTimeout(()=>{
                        navigate("/")
                    },750);
                }
            )
            .catch(error => console.log(error));
    }

    return (
        <div className='loginDesign'>
            {/* <pre>{JSON.stringify(credenciales, null, 2)}</pre> */}
            <InputText 
                type={"email"} 
                name={"email"} 
                placeholder={"Escribe tu email"} 
                functionHandler={InputHandler}
            />
            <InputText 
                type={"password"} 
                name={"password"} 
                placeholder={"Escribe tu contraseña"} 
                functionHandler={InputHandler}
            />

            <div className='loginButtonDesign' onClick={()=>Logeame()}>LOGIN</div>
        </div>
    );
};