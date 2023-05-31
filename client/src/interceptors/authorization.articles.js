import axios from "./common.path"

const token = JSON.parse(localStorage.getItem("user")).token
const articlesPath = "/articles"
const communHeaders =  {headers: {
  authorization: `Bearer ${token}`
}}

class ArticleRoutes {
  getAll() {
    return axios.get(`${articlesPath}/all`, communHeaders)
  }

  get(id) {
    return axios.get(`${articlesPath}/${id}`, communHeaders)
  }

  create(data) {
    return axios.post(articlesPath , data, communHeaders)
  }

  delete(id) {
    return axios.delete(`${articlesPath}/${id}`, communHeaders)
  }
}

export default new ArticleRoutes()
