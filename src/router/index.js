import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Features from '../views/Features.vue'
import Services from '../views/Services.vue'
import Projects from '../views/Projects.vue'
import Quote from '../views/Quote.vue'
import Team from '../views/Team.vue'
import NotFound from '../views/NotFound.vue'
import Testimonial from '../views/Testimonial.vue'


const routes = [
    {
        path: '/',
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
        path: '/features',
        name: 'features',
        component: Features
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
    },
    {
        path: '/team',
        name: 'team',
        component: Team
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: NotFound
    },
    {
        path: '/testimonial',
        name: 'testimonial',
        component: Testimonial
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router