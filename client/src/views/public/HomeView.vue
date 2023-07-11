<template>
  <div id="home">
    <div id="image">
      <span  id="yaay" > Yaaay ! <br>Enfin un site avec tous les bons plans pour les jeunes et étudiants</span>
    </div>
    <div id="under-banner"> N'attend pas, découvre les infos qui te  <br> feront vivre ta best life d'étudiant ! </div>
  </div>
</template>

<style scoped>

#image {
  display: flex;
  align-items: center;
background-image: url('@/assets/banner-accueil.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  height: 610px;
  border: #6EDEE9 1px solid;
}
#yaay {
  width: 500px;
  font-size: 40px;
  font-weight: bold;
  margin-left: 80px;
  color: #13005A;
}
#under-banner {
  color: #9BC1D6;
  background-color: #13005A;
  padding: 80px;
  font-size: 30px;
  font-weight: bold;
}
</style>