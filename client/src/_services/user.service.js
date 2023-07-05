import http from "./http.service";

let getAllUsers = () => {
    return http.get('/users')
}

let getUserById = () => {
    return http.get('/users/:id')
}

let deleteUserById = () => {
    return http.delete('/users/:id')
} 


export const userService = {
    getAllUsers, getUserById, deleteUserById
}