import { createRouter, createWebHashHistory } from 'vue-router'
import PublicPageView from '../views/public/PublicPageView.vue'
import HomeView from '../views/public/HomeView.vue'
import DisplayArticlesView from '../views/public/DisplayArticlesView.vue'
import DisplayOneArticleView from '../views/public/DisplayOneArticleView.vue'

import AdminPageView from '../views/admin/AdminPageView.vue'
import AddArticleView from '../views/admin/AddArticleView.vue'
import DisplayUsersView from '../views/admin/DisplayUsersView.vue'

import SignupView from '../views/public/SignupView.vue'
import LoginView from '../views/public/LoginView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'public',
    component: PublicPageView,
    children: [
      { path: '/', name: 'home', component: HomeView },
      { path: '/signup', name: 'signup', component: SignupView },
      { path: '/login', name: 'login', component: LoginView },
      { path: '/articles', name: 'display-all-articles', component: DisplayArticlesView },
      { path: '/articles/:id', name: 'display-one-article', component: DisplayOneArticleView },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPageView,
    children: [
      { path: '/users', name: 'users', component: DisplayUsersView  },
      { path: '/add-article', name: 'add-article', component: AddArticleView },
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
