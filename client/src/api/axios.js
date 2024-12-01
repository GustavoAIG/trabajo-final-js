import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://backend-mongo-in5c.onrender.com/api',
    withCredentials: true
})

export default instance