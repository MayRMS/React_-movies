
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Home } from '../Home/Home';
import { SerieDetail } from '../SerieDetail/SerieDetail';
import { Login } from '../User/Login/Login';
import { Register } from '../User/Register/Register';

export const Body = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/detail" element={<SerieDetail />}/>
        </Routes>
    )
};