import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import type { App } from 'vue'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
const usePinia = (app: App) => {
    app.use(pinia)
}

export default usePinia
