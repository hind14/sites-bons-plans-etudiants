import { defineStore } from 'pinia'
import { accountService, userService } from '@/_services'

export const useUserStore = defineStore('users', {
    state: () => ({ user: null}),
    // actions: {
    //     login() {
    //         this.user = accountService.login
    //     },
    //     logout() {
    //         this.user = accountService.logout
    //     },
    //     getUserfromLogin() {
    //         this.user = userService.getUserById
    //     }

    // }

})
