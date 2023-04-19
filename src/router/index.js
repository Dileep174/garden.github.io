import { createRouter, createWebHistory} from 'vue-router'
import Header from '../views/Header.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Posts from '../views/Posts.vue'
import Services from '../views/Services.vue'
import Projects from '../views/Projects.vue'
import Quote from '../views/Quote.vue'
import Team from '../views/Team.vue'


const routes = [
    {
        path: '/',
        name: 'header',
        component: Header 
    },
    {
        path: '/home',
        name: 'home',
        component: Home 
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/posts',
        name: 'posts',
        component: Posts
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },

    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/quote',
        name: 'quote',
        component: Quote
    },
    {
        path: '/team',
        name: 'team',
        component: Team
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router