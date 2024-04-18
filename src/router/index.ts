// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import SearchPage from '@/views/SearchPage.vue'
import SearchPageFilter from '@/components/SearchPageFilter.vue'
import SearchPageFilterDrawer from '@/components/SearchPageFilterDrawer.vue'
import AuthPage from '@/views/AuthPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import BookInfo from '@/views/BookInfo.vue'
import AuthorPage from '@/views/AuthorPage.vue'
import CreateBook from '@/views/CreateBook.vue'
import CreateAuthor from '@/views/CreateAuthor.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/search',
    components: {
      default: SearchPage,
      sidebar: SearchPageFilter,
      drawer: SearchPageFilterDrawer
    },
  },
  {
    path: '/auth',
    component: AuthPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/books/:id',
    component: BookInfo
  },
  {
    path: '/author',
    component: AuthorPage
  },
  {
    path: '/books/create',
    component: CreateBook
  },
  {
    path: '/authors/create',
    component: CreateAuthor
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
