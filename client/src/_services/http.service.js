import axios from 'axios'
import { accountService } from './account.service'

const http = axios.create({
    baseURL: 'http://localhost:3000',
})

http.interceptors.request.use(request => {

    let token = localStorage.getItem('token')

    if (token) {
        request.headers.Authorization = 'Bearer ' + token
    }

    return request
})


export default http