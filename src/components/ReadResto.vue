<template>
  <div v-if="currentResto" class="edit-form">
    <h4>Détails et modification du restaurant {{ currentResto.title }}</h4>
    <form>
      <div class="form-group">
        <label for="title">Enseigne</label>
        <input type="text" class="form-control" id="title" v-model="currentResto.title"/>
      </div>

      <div class="form-group">
        <label for="title">Adresse</label>
        <input type="text" class="form-control" id="address" v-model="currentResto.address"/>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea type="text" class="form-control" id="description" v-model="currentResto.description" rows="10" maxlength="2000"></textarea>
      </div>

      <div class="form-group">
        <label for="categorie">Catégorie</label>
        <input type="text" class="form-control" id="categorie" v-model="currentResto.categorie"/>
      </div>

      <div class="form-group">
        <label for="feedback">Appréciation</label>
        <textarea type="text" class="form-control" id="feedback" v-model="currentResto.feedback" rows="5" maxlength="2000"></textarea>
      </div>

      <!-- <div class="form-group">
        <label><strong>Catégorie:</strong></label>
        <p>{{ currentResto.categorie }}</p>
      </div> -->
    </form>
    <div class="boutt">
      <button class="btn btn-sm btn-danger" @click="deleteResto">Supprimer</button>
      <button type="submit" class="btn btn-sm btn-success" @click="updateResto">Mettre à jour</button>
      <p>{{ message }}</p>
    </div>

  </div>

  <div v-else>
    <br />
    <p>Veuillez sélectionner un restaurant</p>
  </div>
</template>

<script>
import RestoDataService from "../services/RestoDataService";

export default {
  name: "ReadResto",
  props: ["resto"],
  data() {
    return {
      currentResto: null,
      message: "",
    };
  },
  watch: {
    resto: function(resto) {
      this.currentResto = { ...resto };
      this.message = "";
    },
  },
  methods: {
    updateResto() {
      const data = {
        title: this.currentResto.title,
        description: this.currentResto.description,
        categorie: this.currentResto.categorie,
        address: this.currentResto.address,
        feedback: this.currentResto.feedback
      };

      RestoDataService.update(this.currentResto.key, data)
        .then(() => {
          this.message = "L'enseigne a été mise à jour !";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteResto() {
      RestoDataService.delete(this.currentResto.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentResto = { ...this.Resto }
  },
};
</script>

<style scoped>
.edit-form {
  max-width: 600px;
  margin: auto;
}

h4 {
  text-align: center;
  margin-bottom: 30px;
}

.boutt {
  text-align: center;
}

.btn-sm {
  margin: 25px 10px 30px 0;
}

@media screen and (max-width:767px) {
  .boutt {
    text-align: center;
  }

  .btn-sm {
    margin: 30px 10px 30px 0;
  }
}

</style>