
import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';
import { InputText } from '../../common/InputText/InputText';
import { postLogin } from '../../services/apiCalls';

import './Login.css';

export const Login = () => {

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
        postLogin()
            .then(
                resultado => {

                    //Ahora yo desencriptaría el token... 

                    //Una vez desencriptado, guardaría los datos de usuario desencriptados
                    //y el token encriptado también, ambas cosas en REDUX, para usarlas cuando yo quiera

                    console.log(resultado);

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