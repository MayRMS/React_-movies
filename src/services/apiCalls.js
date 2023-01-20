
import axios from 'axios';

const root = 'http://localhost:3000/';
const root2 = 'https://api.themoviedb.org/3';
const api_key = '210d6a5dd3f16419ce349c9f1b200d6d';

export const postLogin = async (credenciales) => {

    // return await axios.post(`${root}/user/login`, credenciales);

    //Devuelvo un token hardcodeado
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjpbeyJfaWQiOiI2M2I5NWFiM2JkOWU2MDAxYjNmYzlkYmUiLCJuYW1lIjoiTWFyY29zIiwic3VybmFtZSI6IkzDs3BleiIsImRuaSI6IjIzMjc4NjU2TiIsImVtYWlsIjoibWFyY29zbUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRTUnZTYWxRVXBmR3hMT2dhVnNZVlcud095cmk0YkZTZDJRcUVaTzFWN0w0T200cjBjSDcyMiIsInBob25lIjo2OTY3NzY0MjEsIm5hdGlvbmFsaXR5IjoiRXNwYcOxYSIsIl9fdiI6MH1dLCJpYXQiOjE2NzM4NTk1MjgsImV4cCI6MTY3Mzk0NTkyOH0.dTAu9QE_93WMHoRukxUWFo2gwJbCBQb4EjUAqImYtPI';
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


    let config = {
        method: 'post', //aqui especifico el protocolo http
        url : `${root}/oders/neworder`, //este sería mi endpoint del backend
        body, //el body que contiene los datos
        headers: { 
            'Authorization': 'Bearer ' + token
          }
    }

    return await axios.post(config);
}


