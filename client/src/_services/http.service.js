import axios from 'axios'
import { accountService } from './account.service'
import router from '@/router'

const http = axios.create({
    baseURL: 'http://localhost:3000',
})

/** cas où le token expire */
http.interceptors.request.use(request => {

    if (accountService.isLogged()) {
        request.headers.Authorization = 'Bearer ' + accountService.getToken()
    }

    return request
})

/** cas où le token expire */
http.interceptors.response.use(response => {

    return response

}, error => {

    if (error.response.status == 401) {
        accountService.logout()
        router.push('/login')
    }

})


export default http