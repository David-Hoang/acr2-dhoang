<template>
<div class="col-md-6 mx-auto">
  <div class="submit-form">
    <div v-if="!submitted">
      <h4>Enregistrement d'une nouvelle enseigne</h4>
      <div class="form-group">
        <label for="title">Nom de l'enseigne</label>
        <input type="text" class="form-control" id="title" required v-model="resto.title" name="title" maxlength="60"/>
      </div>

      <div class="form-group">
        <label for="address">Adresse</label>
        <input class="form-control" id="address" required v-model="resto.address" name="address" maxlength="100"/>
      </div>

      <div class="form-group">
        <label for="categorie">Catégorie</label>
        <input class="form-control" id="categorie" required v-model="resto.categorie" name="categorie" maxlength="50"/>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" required v-model="resto.description" name="description" rows="10" maxlength="2000"></textarea>
      </div>

      <div class="form-group">
        <label for="feedback">Appréciation</label>
        <textarea class="form-control" id="feedback" required v-model="resto.feedback" name="feedback" rows="5" maxlength="2000"></textarea>
      </div>

      <button @click="saveResto" class="btn btn-success">Enregistrer</button>
    </div>

    <div v-else>
      <h4>L'enseigne à bien été enregistré !</h4>
      <button class="btn btn-success" @click="newResto">Ajouter une autre enseigne</button>
    </div>
  </div>
</div>
</template>

<script>
import RestoDataService from "../services/RestoDataService";

export default {
  name: "add-resto",
  data() {
    return {
      resto: {
        title: "",
        description: "",
        categorie: "",
        address: "",
        feedback: "",
      },
      submitted: false
    };
  },
  methods: {
    saveResto() {
      var data = {
        title: this.resto.title,
        description: this.resto.description,
        categorie: this.resto.categorie,
        address: this.resto.address,
        feedback: this.resto.feedback,

      };

      RestoDataService.create(data)
        .then(() => {
          console.log("Le restaurant à été créer !");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newResto() {
      this.submitted = false;
      this.resto = {
        title: "",
        description: "",
        categorie: "",
        address: "",
        feedback: "",
      };
    },

  }
};
</script>

<style scoped>
h4 {
  text-align: center;
  margin-bottom: 40px;
}

.btn-success {
  display: block;
  margin: 50px auto;
}

textarea {
  max-width: 100%;
  line-height: 1.5;
}
</style>