
import axios from 'axios';

const root = 'http://localhost:3000/';
const root2 = 'https://api.themoviedb.org/3';
const api_key = '210d6a5dd3f16419ce349c9f1b200d6d';

export const postLogin = async (credenciales) => {

    // return await axios.post(`${root}/user/login`, credenciales);

    //Devuelvo un token hardcodeado
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjpbeyJfaWQiOiI2M2I5NzI5NWJkOWU2MDAxYjNmYzlkZTYiLCJuYW1lIjoiRnJhbmNpc2NvIiwic3VybmFtZSI6IkNhcnJpb24iLCJkbmkiOiI2NzY2NzM1NUIiLCJlbWFpbCI6ImZyYW5jaXNjb2NAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkVGZ5SjFJZDJFT2VRZGRtUnk1cWFoT3pxOGxVRXYxM2FPa3ZCTjcwMmhENUgwWG9ucW1lNjYiLCJwaG9uZSI6NjU2NTMzMzMzLCJuYXRpb25hbGl0eSI6IkVzcGHDsWEiLCJfX3YiOjAsInJvbCI6ImFkbWluIn1dLCJpYXQiOjE2NzQ1NTI0MTEsImV4cCI6MTY3NDYzODgxMX0.DqNzqIz2NwuRakHScEzfSQrJT_WEpYhE71Eg0OrqoWo';
};

export const postRegister = async (body) => {

    //A continuación vemos como se enviaría el body por axios para el registro
    return await axios.post(`${root2}/user`, body)
}

export const getSeries = async () => {

    return await axios.get(`${root2}/tv/popular?api_key=${api_key}&language=en-US&page=1`);

}

export const getSearch = async (criterioBusqueda) => {

    return await axios.get(`${root2}/search/tv?api_key=${api_key}&language=en-US&page=1&query=${criterioBusqueda}&include_adult=false`);
}

//Funcion que alquila

export const postRent = async (body, token) => {


    //Esta sería la forma en la que conectaríamos con la API para realizar el pedido

    // let config = {
    //     method: 'post', //aqui especifico el protocolo http
    //     url : `${root}/oders/neworder`, //este sería mi endpoint del backend
    //     body, //el body que contiene los datos
    //     headers: { 
    //         'Authorization': 'Bearer ' + token
    //       }
    // }

    // return await axios.post(config);


    //Las dos líneas que hay a continuación hacen referencia a poder hacer el pedido en este caso ya que no dispongo de una API
    const resultado = {data: 'El pedido se ha realizado correctamente'}
    return resultado;
    
}


//Endpoints para Admin

export const allUsersAdmin = async (token) => {

    //Esta sería la forma en la que conectaríamos con la API para traernos todos los users en modo admin

    // let config = {
    //     method: 'post', //aqui especifico el protocolo http
    //     url : `${root}/admin/allUsers`, //este sería mi endpoint del backend de admin que trae todos los users
    //     body, //el body que contiene los datos
    //     headers: { 
    //         'Authorization': 'Bearer ' + token
    //       }
    // }

    // return await axios.post(config);

    const resultado = [
        {id: 3,name: 'Pepito', surname: 'Garcia', age: 28 },
        {id: 2,name: 'Pepita', surname: 'Perez', age: 23},
        {id: 1,name: 'Manolito', surname: 'Sanchez', age: 18},
        {id: 56,name: 'Manolita', surname: 'Rodriguez', age: 50}
    ];

    return resultado;
}


