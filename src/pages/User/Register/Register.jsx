
import React, { useState, useEffect } from 'react';
import { InputText } from '../../../common/InputText/InputText';
import { errorCheck } from '../../../services/utiles';
import './Register.css';
import { newUser } from '../../../services/apiCalls'

export const Register = () => {

    const [usuario, setUsuario] = useState({
        name: '',
        password: '',
        email: '',
        age: '',
        country: ''
    })

    const [usuarioError, setUsuarioError] = useState({
        nameError: '',
        passwordError: '',
        emailError: '',
        ageError: '',
        countryError: ''
    })

    const register = async () => {
        const newRegister = await newUser(usuario)
        return newRegister
    }

    const registerInputHandler = (e) => {

        setUsuario((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
            
        }));;

    }

    const registerErrorHandler = (e) => {

        let error = '';

        error = errorCheck(e.target.name, e.target.value);


        setUsuarioError((prevState)=>({...prevState, 
            [e.target.name + 'Error'] : error
        }));
        
    }

    return (
        <div className='registerDesign'>
            {/* <pre>{JSON.stringify(usuario, null, 2)}</pre> */}
            <InputText 
                type={'text'} 
                name={'name'} 
                className={usuarioError.nameError === '' ? 'registerInput' : 'registerInput inputDesignError'} 
                placeholder={'nombre'} functionHandler={registerInputHandler} 
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.nameError}</div>
            <InputText 
                type={'password'} 
                name={'password'} 
                className={usuarioError.passwordError === '' ? 'registerInput' : 'registerInput inputDesignError'} 
                placeholder={'pass'} 
                functionHandler={registerInputHandler} 
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.passwordError}</div>
            <InputText 
                type={'text'} 
                name={'age'} 
                className={usuarioError.ageError === '' ? 'registerInput' : 'registerInput inputDesignError'} 
                placeholder={'age'} 
                functionHandler={registerInputHandler} 
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.phoneError}</div>
            <InputText 
                type={'text'} 
                name={'country'} 
                className={usuarioError.countryError === '' ? 'registerInput' : 'registerInput inputDesignError'} 
                placeholder={'pais'} 
                functionHandler={registerInputHandler} 
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.countryError}</div>
            <InputText 
                type={'email'} 
                name={'email'} 
                className={usuarioError.emailError === '' ? 'registerInput' : 'registerInput inputDesignError'} 
                placeholder={'correo'} 
                functionHandler={registerInputHandler} 
                errorHandler={registerErrorHandler}
            />
            <div className='errorText'>{usuarioError.emailError}</div>

            <div className='registerButtonDesign' onClick={async ()=>{
            
                console.log(usuario);
                await register(usuario)
            }
            }>Register</div>
        </div>
    );
};