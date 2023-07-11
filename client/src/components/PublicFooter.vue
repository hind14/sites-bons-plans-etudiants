<template >
    <footer id="footer">
        <p class="elt"> Tu as des question?</p>
        <div class="elt">
            <p>F.A.Q</p>
            <a href="mailto:"> Contacte-nous</a>
            <img id="social-network-img" src="@/assets/social-network.png" />
        </div>

        <div class="elt">
            <p>Accueil</p>
            <p>A propos</p>
            <p>Mention légales</p>
        </div>

    </footer>
</template>

<style scoped>
#footer {
    display: flex;
    justify-content:center;
}
.elt {
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
}
#social-network-img {
    width: 50px;
}</style>