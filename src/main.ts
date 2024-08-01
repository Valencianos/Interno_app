import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from './router'
import HomeView from '@/views/HomeView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import BlogView from '@/views/BlogView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactsView from '@/views/ContactsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('HomeView', HomeView);
app.component('AboutUsView', AboutUsView);
app.component('BlogView', BlogView);
app.component('ServicesView', ServicesView);
app.component('ContactsView', ContactsView);
app.component('NotFoundView', NotFoundView);

app.mount('#app')
