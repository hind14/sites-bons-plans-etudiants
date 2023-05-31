import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DisplayArticlesView from '../views/DisplayArticlesView.vue'
import AddArticleView from '../views/AddArticleView.vue'
import DisplayOneArticleView from '../views/DisplayOneArticleView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  }
  ,
  {
    path: '/login',
    name: 'login',
    component: LoginView
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
  {
    path:'/:pathMatch(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
