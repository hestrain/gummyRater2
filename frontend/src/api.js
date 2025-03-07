import axios from "axios";
// const router = require('express').Router()


let URL =  "http://localhost:4000";


// export async function getUsers() {
//     const response = await axios.get(`${URL}/users`)
//     if (response.status === 200) {
//         return response.data
//     } else {
//         return
//     }
// }
// export async function getUser(id) {
//     const response = await axios.get(`${URL}/users/${id}`)
//     if (response.status === 200) {
//         return response.data
//     } else {
//         return
//     }
// }
// export async function createUser(user) {
//     const response = await axios.post(`${URL}/users`, user)
//         return response
// }
// export async function updateUser(id, user) {
//     const response = await axios.put(`${URL}/users/${id}`, user)
//         return response
// }
// export async function deleteUser(id) {
//     const response = await axios.delete(`${URL}/users/${id}`)
//         return response
// }
export async function getGummys() {
    // console.log("getting all gummys");
    
    const response = await axios.get(`${URL}/gummy`)
    if (response.status === 200) {
        console.log("got data");

        // console.log(response);
        
        return response.data
    } else {
        return console.error();
        
    }
}
export async function getGummy(id) {
    const response = await axios.get(`${URL}/gummy/${id}`)
    if (response.status === 200) {
        return response.data
    } else {
        return
    }
}
export async function createGummy(gummy) {
    const response = await axios.post(`${URL}/gummy`, gummy)
        return response
}
export async function updateGummy(id, gummy) {
    const response = await axios.put(`${URL}/gummy/${id}`, gummy)
        return response
}
export async function deleteGummy(id) {
    const response = await axios.delete(`${URL}/gummy/${id}`)

        return response
}


// export const getGummys = () => {
//     return fetch('/api/gummys'), {
//         method: 'GET',
//         headers:{
//             'Content-Type':'application/json',
//         },
//     }
// }
// export const createGummy = (gummy) => {
//     return fetch('/api/gummys'), {
//         method: 'POST',
//         headers:{
//             'Content-Type':'application/json',
            
//         },
//         body: JSON.stringify(gummy)
//     }
// }
// export const deleteGummy = (id) => {
//     return fetch(`${URL}`api/gummy/${id}`), {
//         method: 'DELETE',
//     }
// }