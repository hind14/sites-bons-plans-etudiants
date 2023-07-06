import { defineStore } from 'pinia'
import jwtDecode from 'jwt-decode'

export const useUserStore = defineStore('users', {
    state: () => ({
        isConnected: false,
        isAdmin: false,
        role: null,
        userId: 0
    }),
    getters: {
        userConnected(state) {
            return state.isConnected
        },
        getUserId(state) {
            let token = localStorage.getItem("token")
            let decodedToken = jwtDecode(token)
            decodedToken.userId
            return state.userId
        }
    },
    actions: {
        login(token) {
            localStorage.setItem('token', token)
            let decodedToken = jwtDecode(token)
            this.role = decodedToken.role
            if(this.role == "admin") {
                this.isAdmin = true
            }
            this.isConnected = true
            this.userId = decodedToken.userId
        },
        isAuthenticated() {
            localStorage.getItem("token")
            this.isConnected = true
        },
        lastConnectionAvailable() {
            let token = localStorage.getItem("token");
            if (token) {
                token = jwtDecode(token);
                if ((token.exp * 1000) > Date.now()) {
                    this.isConnected = true
                    this.userId = token.userId
                    this.role = token.role

                    if(token.role == "admin") {
                        this.isAdmin = true
                    }
                }
            }
        }, logout() {
            localStorage.removeItem('token')
            this.isConnected = false
            this.isAdmin = false
            this.role = null
            this.userId = 0
        },
        deleteUser()
         {
            localStorage.removeItem('token')
            this.isConnected = false
         }
    }
})
