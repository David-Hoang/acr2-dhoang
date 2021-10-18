<template>
    <h1>RestoNote</h1>
    <agile :nav-buttons="false" :autoplay-speed="5000" :speed="2500" :dots="false" autoplay fade>
        <div class="slide">
            <div class="img-slide">
            <img src="../assets/carousel-1.jpg" alt="table-restaurant">
            </div>
        </div>
        <div class="slide">
            <div class="img-slide">
            <img src="../assets/carousel-2.jpg" alt="couple-restaurant">
            </div>
        </div>
        <div class="slide">
            <div class="img-slide">
            <img src="../assets/carousel-3.jpg" alt="japon-restaurant">
            </div>
        </div>
    </agile>
    <div class="container">
        <h2>Donnons une note d'appréciation à nos restaurants favoris !</h2>
        <p>Sur notre site, vous pouvez ajouter et aussi mettre une appréciation qu'il soit en terme de service ou bien de qualitée. N'hésitez pas à mettre le maximum d'informations utile pour que tous le monde puissent les voirs !</p>
    </div>
</template>

<script scoped>
import { VueAgile } from 'vue-agile'

export default { 
    components: {
        agile: VueAgile 
    }
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 50px;
}

.img-slide{
    width : 100%;
    height : auto;
}

img {
    width : 100%;
    height : auto;
}

</style>