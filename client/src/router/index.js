import { createRouter, createWebHistory } from 'vue-router'

//PUBLIC
import PublicPageView from '../views/public/PublicPageView.vue'
import HomeView from '../views/public/HomeView.vue'
import DisplayArticlesView from '../views/public/DisplayArticlesView.vue'
import DisplayOneArticleView from '../views/public/DisplayOneArticleView.vue'
//AUTH
import SignupView from '../views/auth/SignupView.vue'
import LoginView from '../views/auth/LoginView.vue'

//ADMIN
import AdminPageView from '../views/admin/AdminPageView.vue'
import AddArticleView from '../views/admin/AddArticleView.vue'
import DisplayUsersView from '../views/admin/DisplayUsersView.vue'

//USER
import UserPageView from '../views/user/UserPageView.vue'
import ProfileView from '../views/user/ProfileView.vue'
import FavoriteArticlesView from '../views/user/FavoriteArticlesView.vue'

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
    path: '/user',
    name: 'user',
    component: UserPageView,
    children: [
      { path: '/profil', name: 'profil', component: ProfileView },
      { path: '/favorite-articles', name: 'favorite-articles', component: FavoriteArticlesView },
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPageView,
    children: [
      { path: '/users', name: 'users', component: DisplayUsersView },
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
