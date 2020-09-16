import axios from 'axios'

export const getAllUsers = ()=>{
    return axios.get('https://reqres.in/api/users?page=2')
}