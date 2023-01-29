
import React from 'react';
import './CardUsersRentals.css';


export const CardUsersRents = ({rent}) => {
   
    return (
        <div className='cardUsersRentalsDesign'>
            <div> User Id{rent.idUser}</div>
            <div> Serie Id{rent.idUser}</div>
            <div> Return Date{rent.returnDate}</div>
        </div>
    )
}