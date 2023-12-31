import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import './styles.scss'


const app = createApp(App)
app.mount('#app')

document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })
