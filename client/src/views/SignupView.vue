<template>
    <div class="signup">

      <div id="form-style">
        <h1>N'attendez plus, inscrivez-vous !</h1>
        <form @submit.prevent="signup" id="form">
          <div class="signup-inputs">
            <label for="name">Prénom</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="name"
              required="true"
            />
          </div>

          <div class="signup-inputs">
            <label for="lastname">Nom</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              v-model="lastname"
              required="true"
            />
          </div>
          
          <div class="signup-inputs">
            <label for="username">username</label>
            <input
              type="text"
              id="username"
              name="username"
              v-model="username"
              required="true"
            />
          </div>

          <div class="signup-inputs">
            <label for="age">age</label>
            <input
              type="text"
              id="age"
              name="age"
              v-model="age"
              required="true"
            />
          </div>

          <div class="signup-inputs">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="email"
              required="true"
            />
          </div>

          <div class="signup-inputs">
            <label for="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              v-model="password"
              required="true"
            />
          </div>
  
          <button id="signup-style">Inscription</button>
        </form>
        <div>
          Déja membre?
          <router-link to="/login">Connectez-vous !</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios"
  
  export default {
    data() {
      return {
        name: "",
        lastname: "",
        username: "",
        age: "",
        email: "",
        password: "",
      }
    },
    methods: {
      signup() {
        axios
          .post("http://localhost:8080/inscription", {
            name: this.name,
            lastname: this.lastname,
            username : this.username,
            age: this.age,
            email: this.email,
            password: this.password,
          })
          .then(() => {

            this.$router.push("login")
          })
          .catch((error) => {
            console.log(error)
          })
      },
    },
  }
  </script>
  
  <style>
  
  </style>