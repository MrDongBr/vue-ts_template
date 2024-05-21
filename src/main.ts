import { createApp } from 'vue'

import App from './App.vue'
import useRouter from './router'
import usePinia from './stores'
import './styles/index.scss'

const app = createApp(App)

usePinia(app)
useRouter(app)

app.mount('#app')
