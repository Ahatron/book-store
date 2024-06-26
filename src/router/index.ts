/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import SearchBook from '@/pages/SearchBook.vue'
import SearchBookFilter from '@/components/SearchBookFilter.vue'
import SearchBookFilterDrawer from '@/components/SearchBookFilterDrawer.vue'
import AuthPage from '@/pages/AuthPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import BookInfo from '@/pages/BookInfo.vue'
import BookEdit from '@/pages/BookEdit.vue'
import BookInfoSidebar from '@/components/BookInfoSidebar.vue'
import AuthorPage from '@/pages/AuthorPage.vue'
import AuthorEdit from '@/pages/AuthorEdit.vue'
import CreateBook from '@/pages/CreateBook.vue'
import CreateAuthor from '@/pages/CreateAuthor.vue'
import Adaptive from '@/layouts/Adaptive.vue'
import AdaptiveLeftSidebar from '@/layouts/AdaptiveLeftSidebar.vue'
import AdaptiveRightSidebar from '@/layouts/AdaptiveRightSidebar.vue'
import SearchDialog from '@/components/SearchDialog.vue'
import PublisherPage from '@/pages/PublisherPage.vue'
import UserPage from '@/pages/UserPage.vue'
import { RouteRecordRaw } from 'vue-router'
import UserDataForm from '@/components/UserDataForm.vue'
import CartList from '@/components/CartList.vue'
import LikeList from '@/components/LikeList.vue'
import SubscriptionsList from '@/components/SubscriptionsList.vue'
import AuthorList from '@/components/AuthorList.vue'
import PublisherList from '@/components/PublisherList.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import NotifyList from '@/components/NotifyList.vue'
import HomeHeader from '@/components/HomeHeader.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    components: {
      default: Adaptive,
    },
    children: [
      {
        path: '/',
        components: {
          default: Home,
          header: HomeHeader
        }
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
        path: '/users/:id',
        component: UserPage,
        children: [
          {
            path: 'personal',
            name: 'personal',
            component: UserDataForm,
          },
          {
            path: 'cart',
            name: 'cart',
            component: CartList
          },
          {
            path: 'liked',
            name: 'liked',
            component: LikeList
          },
          {
            path: 'subscriptions',
            // redirect: 'subscriptions/authors',
            name: 'subscriptions',
            component: SubscriptionsList,
          },
          {
            path: 'notifications',
            name: 'notifications',
            component: NotifyList
          }
        ]
      },
      {
        path: '/authors/:id',
        component: AuthorPage,
        children: [
          {
            path: 'edit',
            component: AuthorEdit
          },
        ]
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
      },

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
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
