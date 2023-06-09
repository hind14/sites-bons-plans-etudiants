<template>
    <h2> Liste de users </h2>
    <table>
        <tr>
            <th>PRENOM</th>
            <th>NOM</th>
            <th>USERNAME</th>
            <th>EMAIL</th>

        </tr>
        <tr v-for=" user in users">
            <td> {{ user.name }} </td>
            <td> {{ user.lastname }} </td>
            <td> {{ user.username }} </td>
            <td> {{ user.email }} </td>
        </tr>
    </table>
</template>

<script>
import { userService } from '@/_services';

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
}
</script>
<style scoped>
table, th, td {
  border:1px solid black;
}</style>