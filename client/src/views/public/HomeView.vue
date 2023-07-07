<template>
  <div id="home">
    <img :src="image" />
    <div> Yaaay ! Enfin un site avec tous les bons plans pour les jeunes et étudiants</div>
    <div> N'attend pas, découvre les infos qui te feront vivre ta best life d'étudiant ! </div>
  </div>
</template>

<script>
import image from "../../assets/banner-accueil.jpg"

export default {
  data: function () {
    return {
      image: image
    }
  }
}

</script>

<style scoped></style>