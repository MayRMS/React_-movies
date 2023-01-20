
import React, { useState, useEffect } from 'react';
import { InputText } from '../../../common/InputText/InputText';
import './Register.css';

export const Register = () => {

    const [usuario, setUsuario] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        country: ''
    })

    const registerInputHandler = (e) => {

        //Manejo la entrada de datos en los input y voy actualizando el hook usuario a medida
        //que los datos se van introduciendo

        //Bindear (atar)
        setUsuario((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
            
        }));;

    }

    return (
        <div className='registerDesign'>
            <pre>{JSON.stringify(usuario, null, 2)}</pre>
            <InputText type={'text'} name={'name'} placeholder={'nombre'} functionHandler={registerInputHandler}/>
            <InputText type={'password'} name={'password'} placeholder={'pass'} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={'phone'} placeholder={'telf'} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={'country'} placeholder={'pais'} functionHandler={registerInputHandler}/>
            <InputText type={'email'} name={'email'} placeholder={'correo'} functionHandler={registerInputHandler}/>
        </div>
    );
};