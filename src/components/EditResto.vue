<template>
  <div class="list row">
    <div class="col-md-4">
      <h2>Liste des restaurants</h2>
      <ul class="list-group">
        <li class="list-group-item" :class="{ active: index == currentIndex }" v-for="(resto, index) in restos" :key="index" @click="setActiveResto(resto, index)">
          {{ resto.title }}
        </li>
      </ul>

      <button class="btn btn-sm btn-danger" @click="removeAllRestos">Tout supprimer</button>
    </div>
    <div class="col-md-8">
      <div v-if="currentResto">
        <resto-details :resto="currentResto" @refreshList="refreshList"/>
      </div>
      <div v-else>
        <br />
        <p>Veuillez cliquer sur un restaurant</p>
      </div>
    </div>
  </div>
</template>

<script>
import RestoDataService from "../services/RestoDataService";
import RestoDetails from "./ReadResto";

export default {
  name: "restos-edit",
  components: { RestoDetails },
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

    refreshList() {
      this.currentResto = null;
      this.currentIndex = -1;
    },

    setActiveResto(resto, index) {
      this.currentResto = resto;
      this.currentIndex = index;
    },

    removeAllRestos() {
      RestoDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
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
.list {
  justify-content: space-between;
}

p{
  text-align: center;
}

h2 {
  margin-bottom: 30px;
  text-align: center;
}

.list-group {
  word-break: break-word;
}

.btn-sm {
  display : block;
  margin : 25px auto;
}

@media screen and (max-width:767px) {
  .btn-sm {
    margin:  30px auto 100px;
    display: block;
  }
}
</style>