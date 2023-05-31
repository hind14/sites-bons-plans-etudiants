import axios from "./common.path"

const token = JSON.parse(localStorage.getItem("user")).token

const articlesPath = "/articles"
const communHeaders = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}

class ArticleRoutes {
  create(data) {
    return axios.post(articlesPath, data, communHeaders)
  }

  getAll() {
    return axios.get(`${articlesPath}/all`)
  }

  get(id) {
    return axios.get(`${articlesPath}/${id}`)
  }

  put(id) {
    return axios.put(`${articlesPath}/${id}`, communHeaders)
  }

  delete(id) {
    return axios.delete(`${articlesPath}/${id}`, communHeaders)
  }
}

export default new ArticleRoutes()
