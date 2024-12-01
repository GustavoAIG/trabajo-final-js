import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://front-js.netlify.app/api',
    withCredentials: true
})

export default instance