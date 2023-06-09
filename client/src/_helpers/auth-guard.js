import router from '../router'

export function authGuard() {
    let token = localStorage.getItem('token')
    console.log(token);
    
    if(token) {
        return true
    }

    router.push('/')
}
