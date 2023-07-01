import http from "./http.service";

let getAllUsers = () => {
    return http.get('/users/admin')
}

let getUserById = () => {
    return http.get('/users/:id')
}

let deleteUserById = () => {
    return http.get('/users/:id')
} 

let deleteUserByAdmin = () => {
    return http.get('/users/:id/admin')
} 

export const userService = {
    getAllUsers, getUserById, deleteUserById, deleteUserByAdmin
}