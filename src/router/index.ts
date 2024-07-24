import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about_us',
    //   name: 'about us',
    //   component: AboutUsView
    // },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: BlogView
    // },
    // {
    //   path: '/pages',
    //   name: 'pages',
    //   component: BlogView
    // },
    // {
    //   path: '/services',
    //   name: 'services',
    //   component: BlogView
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: BlogView
    // },
    // {
    //   path: '/project',
    //   name: 'project',
    //   component: ProjectView
    // },
    // {
    //   path: "/:pathMatch(.*)*",
    //   component: NotFoundView
    // }
  ]
})

export default router
