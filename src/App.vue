<template>
  <div id="app" data-app>
    <v-app>
      <app-header></app-header>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  data() {
    return {
      isBusy: false,
    };
  },
  components: {
    appHeader: Header,
  },
  async created() {
    this.isBusy = true;
    try {
      await this.$store.dispatch("accessData");
    } catch (ex) {
      this.error = "Failed to load data";
    } finally {
      this.isBusy = false;
    }
  },
};
</script>

<style>
#app {
  width: 90%;
  margin-left: 5%;
  padding: 20px;
  float: left;
}
</style>
