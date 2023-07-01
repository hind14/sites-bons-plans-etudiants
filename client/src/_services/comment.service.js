import http from "./http.service";

let getAllComments = () => {
    return http.get('/articles/:articleId/com')
}

let createComment = () => {
    return http.post('/articles/:articleId/com')
}

let updateComment = () => {
    return http.put('/articles/:articleId/com/:id')
}

let deleteCommentById = () => {
    return http.delete('/articles/:articleId/com/:id')
}

let deleteCommentByAdmin = () => {
    return http.delete('/articles/:articleId/com/:id/admin')
}
export const commentService = {
    getAllComments, createComment, updateComment, deleteCommentById, deleteCommentByAdmin
}