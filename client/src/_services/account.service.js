import http from './http.service'


let login = (credentials) => {
    return http.post('/auth/login', credentials)
}

let logout = () => {
    localStorage.removeItem('token')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let getToken = () => {
    return localStorage.getItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

export const accountService = {
    login, logout, saveToken, isLogged, getToken,
}