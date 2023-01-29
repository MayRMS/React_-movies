
import axios from 'axios';

const root = 'http://localhost:8934';
const root2 = 'https://api.themoviedb.org/3';
const api_key = '210d6a5dd3f16419ce349c9f1b200d6d';

export const postLogin = async (cred) => {
    try {
        const res = await axios.post(`${root}/users/login`, cred);
        console.log(res.data)
        return res.data.token
    } catch (error) {
        console.log(error)  
    }
};

export const getSeries = async () => {
    try {
        const series = await axios.get(`${root}/series/toprated`)
        return series;
    } catch (error) {
        console.log(error) 
    } 

}

export const getSearch = async (name, token) => {
    console.log(name)
    try {
        const config = {
        headers: {
            Authorization: `Bearer ${token}`
            }
        } 
        const serie = await axios.get(`${root}/series/name/${name}`, config);
        console.log(serie)
        return serie

    } catch (error) {
        console.log(error) 
    }               
}
export const getSerieById = async (id, token) => {
    try {
        const config = {
        headers: {
            Authorization: `Bearer ${token}`
            }
        } 
        const serie = await axios.get(`${root}/series/${id}`, config);
        return serie.data

    } catch (error) {
        console.log(error) 
    }               
}

export const newUser = async (user) => {
    try {
        return await axios.post(`${root}/users/signup`, user);
    } catch (error) {
        console.log(error) 
    }
}


//Funciones para alquilar y de alquileres del usuario

export const postRent = async (userId, serieId, token) => {
    try {
        const rent = await axios.post(`${root}/rent/newrental`, {user:userId, serie: serieId},{headers:{Authorization:`Bearer ${token}`}})
        return rent
    } catch (error) {
        console.log(error) 
    }
    
}

export const listUserRents = async(userId, token) => {
    try {
        const rents = await axios.get(`${root}/rent/user/${userId}`,{headers:{Authorization:`Bearer ${token}`}})
        return rents.data
    } catch (error) {
        console.log(error) 
    }

}


export const allUsersRents = async (token) => {
    try {
        const rents = await axios.get(`${root}/rent`,{headers:{Authorization:`Bearer ${token}`}})
        return rents.data
    } catch (error) {
        console.log(error) 
    }
}


