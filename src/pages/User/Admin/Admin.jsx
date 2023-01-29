
import React, { useState, useEffect } from 'react';
import './Admin.css';

import {useNavigate} from 'react-router-dom';

import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { allUsersRents } from '../../../services/apiCalls';
import { CardUsersRents } from '../../../common/CardUsersRentals/CardUsersRentals';

export const Admin = () => {
    const navigate = useNavigate();
    const userRDX = useSelector(userData);
    const [allRentals, setAllRentals] = useState([]);
    useEffect(()=>{
        if(!userRDX.userPass.user.admin){
            navigate("/");
        }
    },[])

    
    useEffect(()=>{
        if(!allRentals?.length) allUsersRents(userRDX.userPass.token).then(e => setAllRentals(e.allRents));
    },[allRentals]);

    return (

        <div className='adminDesign'>
            {allRentals?.length > 0 && allRentals.map((rent, i) => (<CardUsersRents key= {i}rent={rent}/>))}
       
        </div>



    
    )  
};