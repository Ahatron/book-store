// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import SearchBook from '@/views/SearchBook.vue'
import SearchBookFilter from '@/components/SearchBookFilter.vue'
import SearchBookFilterDrawer from '@/components/SearchBookFilterDrawer.vue'
import AuthPage from '@/views/AuthPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import BookInfo from '@/views/BookInfo.vue'
import BookEdit from '@/views/BookEdit.vue'
import BookInfoSidebar from '@/components/BookInfoSidebar.vue'
import AuthorPage from '@/views/AuthorPage.vue'
import AuthorEdit from '@/views/AuthorEdit.vue'
import CreateBook from '@/views/CreateBook.vue'
import CreateAuthor from '@/views/CreateAuthor.vue'
import Adaptive from '@/layouts/Adaptive.vue'
import AdaptiveLeftSidebar from '@/layouts/AdaptiveLeftSidebar.vue'
import AdaptiveRightSidebar from '@/layouts/AdaptiveRightSidebar.vue'
import SearchDialog from '@/components/SearchDialog.vue'
import PublisherPage from '@/views/PublisherPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    components: {
      default: Adaptive,
    },
    children: [
      {
        path: '/',
        component: Home
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
        path: '/authors/:id',
        component: AuthorPage
      },
      {
        path: '/authors/:id/edit',
        component: AuthorEdit
      },
      {
        path: '/books/:id',
        components: {
          default: BookInfo,
        },
      },
      {
        path: '/books/create',
        component: CreateBook
      },
      {
        path: '/books/:id/edit',
        component: BookEdit
      },
      {
        path: '/publishers/:id',
        component: PublisherPage,
      },
      {
        path: '/authors/create',
        component: CreateAuthor
      }
    ]
  },
  {
    path: '/',
    component: AdaptiveRightSidebar,
    children: [
      {
        path: '/search',
        components: {
          drawer: SearchBookFilterDrawer,
          default: SearchBook,
          sidebar: SearchBookFilter
        },
      },

    ]
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
