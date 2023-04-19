import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/bootstrap.min.css";
import "./assets/reset.css";



const app = createApp(App)
app.use(router)
app.mount('#app')
