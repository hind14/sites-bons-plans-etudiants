import { defineStore } from 'pinia'
import jwtDecode from 'jwt-decode'

export const useUserStore = defineStore('users', {
    state: () => ({
        user: {},
        isConnected: false,
        role: {},
        userId: 0
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
        login(token) {
            localStorage.setItem('token', token)
            let decodedToken = jwtDecode(token)
            this.role = decodedToken.role
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
        lastConnectionAvailable() {
            let token = localStorage.getItem("token");
            if (token) {
                token = jwtDecode(token);
                if ((token.exp * 1000) > Date.now()) {
                    this.isConnected = true;
                    this.userId = token.userId;
                }
            }
        }
    }
})
