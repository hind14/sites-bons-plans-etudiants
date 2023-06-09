import axios from 'axios'
import { accountService } from './account.service';

const http = axios.create({
    baseURL: 'http://localhost:8080',
})

http.interceptors.request.use(request => {

    if( accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }

    return request
})

export default http