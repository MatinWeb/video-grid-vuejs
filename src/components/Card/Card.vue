<template>
  <v-card class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="information.ImageUrl"> </v-img>
    <v-card-title>{{ information.Title }}</v-card-title>

    <v-card-text>
      <div>{{ information.Description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        block
        color="red darken-1"
        elevation="3"
        outlined
        plain
        :to="{ name: 'Video', params: { id: information.ID } }"
      >
        Watch
      </v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>
export default {
  props: ["information"],
  computed: {
    informations() {
      return this.$store.getters.information;
    },
  },
};
</script>

<style scoped>
.paging_btn {
  width: 100%;
  margin: 30px 0;
  padding: 10px;
  text-align: center;
  float: left;
}
.red_list .v-btn-toggle .v-btn--active {
  background-color: red;
  color: white;
}
</style>