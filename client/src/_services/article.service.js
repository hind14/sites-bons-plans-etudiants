import http from "./http.service";

let getAllArticles = () => {
    return http.get('/articles')
}

let getArticleById = () => {
    return http.get('/articles/:id')
}

let createArticle = () => {
    return http.post('/articles')
}

let updateArticleById = () => {
    return http.put('/articles/:id')
}

let deleteArticleById = () => {
    return http.delete('/articles/:id')
}

export const articleService = {
    getAllArticles, getArticleById, createArticle, updateArticleById, deleteArticleById
}