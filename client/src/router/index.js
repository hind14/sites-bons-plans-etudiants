import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DisplayArticlesView from '../views/DisplayArticlesView.vue'
import AddArticleView from '../views/AddArticleView.vue'
import DisplayOneArticleView from '../views/DisplayOneArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/articles',
    name: 'display-all-articles',
    component: DisplayArticlesView
  },
  {
    path: '/articles/:id',
    name: 'display-one-article',
    component: DisplayOneArticleView
  },
  {
    path: '/add-article',
    name: 'add-article',
    component: AddArticleView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
