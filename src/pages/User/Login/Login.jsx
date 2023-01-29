
import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../common/InputText/InputText';
import { postLogin } from '../../../services/apiCalls';
import { Decoder, errorCheck } from '../../../services/utiles';

//RDX imports......
import { useSelector, useDispatch } from "react-redux";
import { userData, login } from '../userSlice';

import './Login.css';

export const Login = () => {
    const dispatch = useDispatch();
    
    const datosReduxUsuario = useSelector(userData);

    //Hooks
    const [credenciales, setCredenciales] = useState({
        email: '',
        password: ''
    })

    const [credencialesError, setErrorCredenciales] = useState({
        emailError: '',
        passwordError: ''
    })

    const navigate = useNavigate();

    const InputHandler = (e) => {
        setCredenciales((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
            
        }));;
    }

    const LogMe = async () => {
        
        for (const property in credencialesError) {
           if(credencialesError[property] !== ''){
                return;
           }
        }
        
        const token = await postLogin(credenciales)
        const decoded = Decoder(token)
        const userPass = {
            token,
            user: decoded.user
        }
            
        dispatch(login({ userPass }));
        setTimeout(()=>{
            navigate("/")
        }, 750);
    }

    useEffect(()=>{
        if(datosReduxUsuario.userPass.token !== ''){
            navigate("/");
        }
    },[])

    const loginErrorHandler = (e) => {
        
        let error = '';

        error = errorCheck(e.target.name, e.target.value);


        setErrorCredenciales((prevState)=>({...prevState, 
            [e.target.name + 'Error'] : error
        }));
    }


    return (
        <div className='loginDesign'>
            ¡Logéate para empezar a disfrutar de nuestras series!
            {/* <pre>{JSON.stringify(credenciales, null, 2)}</pre> */}
            <InputText 
                
                type={"email"} 
                name={"email"}
                className={credencialesError.emailError === '' ? 'loginInput' : 'loginInput inputDesignError'} 
                placeholder={"Escribe tu email"} 
                functionHandler={InputHandler}
                errorHandler={loginErrorHandler}
            />
            <div className='errorText'>{credencialesError.emailError}</div>

            <InputText 
                type={"password"} 
                name={"password"}
                className={credencialesError.passwordError === '' ? 'loginInput' : 'loginInput inputDesignError'} 
                placeholder={"Escribe tu contraseña"} 
                functionHandler={InputHandler}
                errorHandler={loginErrorHandler}
            />
            <div className='errorText'>{credencialesError.passwordError}</div>

            <div className='loginButtonDesign' onClick={()=>LogMe(credenciales)}>LOGIN</div>
        </div>
    );
};