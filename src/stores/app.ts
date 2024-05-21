import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore(
    'app',
    () => {
        const token = ref('')

        const setToken = (data: string) => {
            token.value = data
        }
        return {
            token,
            setToken
        }
    },
    {
        persist: {
            storage: localStorage,
            paths: ['token']
        }
    }
)
