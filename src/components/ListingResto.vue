<template>
  <div class="list row">
    <div class="col-md-12">
      <h1>Liste des restaurants</h1>
      <ul class="list-group mx-auto">
        <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(resto, index) in restos" :key="index" style ="margin : 20px;">
          <span><b>Enseigne :</b> {{ resto.title }} </span>
          <br/>
          <span><b>Adresse :</b> {{ resto.address }} </span>
          <br/>
          <span><b>Catégories :</b> {{ resto.categorie }}</span>
          <br/>
          <span><b>Description :</b> {{ resto.description }}</span>
          <br/>
          <span><b>Appréciation :</b> {{ resto.feedback }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RestoDataService from "../services/RestoDataService";

export default {
  name: "restos-listing",
  data() {
    return {
      restos: [],
      currentResto: null,
      currentIndex: -1
    };
  },
  methods: {
    onDataChange(items) {
      let _restos = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _restos.push({
          key: key,
          title: data.title,
          description: data.description,
          categorie: data.categorie,
          address: data.address,
          feedback: data.feedback,
        });
      });

      this.restos = _restos;
    },

    setActiveResto(resto, index) {
      this.currentResto = resto;
      this.currentIndex = index;
    },
  },
  mounted() {
    RestoDataService.getAll().on("value", this.onDataChange);
  },
  beforeUnmount() {
    RestoDataService.getAll().off("value", this.onDataChange);
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 50px;
}

.list-group {
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  word-break: break-word;  
}

.list-group-item {
  border: 1px solid #333333;
  border-radius: 5px;
  border-top-width: 1px !important;
  width : 700px;
}

span {
  margin-bottom: 10px;
  display: inline-block;
}
</style>