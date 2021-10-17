<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand"><img src="@/assets/restonote_logo_long_white.png" alt="restonote_logo"/></router-link>
      <div class="navbar-nav mr-auto">

        <li class="nav-item">
          <router-link to="/listing" class="nav-link">Listing</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/add" class="nav-link">Nouveau</router-link>
        </li>
        <li class="nav-item">

          <router-link to="/edit" class="nav-link">Modifier la liste</router-link>
        </li>       
      </div>

      <div class="social">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.container h2 {
  text-align: center;
  margin: 25px auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif !important;
}

.social {
  margin-left: auto !important;
}



.fa:hover {
  opacity: 0.7;
}

.fa {
  margin: 0 10px;
}

.fa-facebook {
  color: white;
}
</style>