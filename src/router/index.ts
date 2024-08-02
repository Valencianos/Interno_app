import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import BlogView from '@/views/BlogView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactsView from '@/views/ContactsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProjectView from '@/views/ProjectView.vue'
import BlogDetailsView from '@/views/BlogDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about_us',
      name: 'about us',
      component: AboutUsView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog_details',
      name: 'blog details',
      component: BlogDetailsView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactsView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundView
    }
  ]
})

export default router
