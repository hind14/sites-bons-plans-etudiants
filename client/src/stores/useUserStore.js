import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', {
    state: () => ({ 
        user: {} ,
        isConnected : false
    }),
    getters: {
        userConnected(state) {
            return state.isConnected
        },
        getUser(state) {
            return state.user
        }
    },
    actions: {
        login() {
            localStorage.setItem('token', token)
            let role = token.role
            this.isConnected = true
        },
        isAuthenticated() {
            localStorage.getItem("token")
            this.isConnected = true
        },
        logout() {
            localStorage.removeItem('token')
            this.isConnected = false
        },
    } 

})
