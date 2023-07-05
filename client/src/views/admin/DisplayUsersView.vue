<template>
    <h2> Liste de users </h2>
    <table>
        <tr>
            <th>PRENOM</th>
            <th>NOM</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>ID</th>
            <th></th>

        </tr>
        <tr v-for="(user, index) in users" :key="user.id">  
            <td> {{ user.name }} </td>
            <td> {{ user.lastname }} </td>
            <td> {{ user.username }} </td>
            <td> {{ user.email }} </td>
            <td> {{  user.id  }}</td>
            <td> <button @click="deleteUser(user.id, index)"> Supprimer </button></td>
        </tr>
    </table> 

</template>

<script>
import { userService } from '@/_services';
import http from '@/_services/http.service';

export default {
    data() {
        return {
            users: []
        }
    },
    mounted() {
        userService.getAllUsers()
            .then(response => this.users = response.data)
            .catch(err => 'interdit')
    },
    methods: {
        deleteUser(id, index) {
            http.delete(`/users/${id}`)
            .then(() => this.users.splice(index, 1))
            .catch(err => console.log("user not deleted"))
        }
    },
}
</script>
<style scoped>
table,
th,
td {
    border: 1px solid black;
}</style>