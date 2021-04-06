<template>
  <div class="paging">
    <ul class="card-parent">
      <li
        class="card-wrapper"
        v-for="information in informations"
        :key="information.ID"
      >
        <app-card :information="information"></app-card>
      </li>
    </ul>
    <div class="btn-parent">
      <v-col cols="12" class="py-2">
        <v-btn-toggle
          tile
          color="red darken-1 accent-3"
          exact-active-class
          :input-value="active"
          v-model="toggle_exclusive"
          exact
          group
        >
          <v-btn
            v-for="(x, index) in infoPaging"
            :value="x"
            exact
            elevation="3"
            :key="x"
            @click.native="routePage(index)"
            >{{ x }}</v-btn
          >
        </v-btn-toggle>
      </v-col>
    </div>
  </div>
</template>

<script>
import Card from "./Card/Card.vue";
import { mapGetters } from "vuex";
import { eventBus } from "../main";
export default {
  data() {
    return {
      search: "",
      check: "Home",
      toggle_exclusive: undefined,
      active: true,
      queryKey: this.$route.query.page,
    };
  },
  watch: {
    $route(to, from) {
      debugger;
      if (this.queryKey != undefined && this.queryKey == to.query.page ) {
        this.$store.dispatch("accessData");
      }
    },
  },
  computed: {
    ...mapGetters(["informations", "infoPaging"]),
  },
  methods: {
    routePage(index) {
      if (this.search === null || this.search === "") {
        this.$router.push({
          name: "Grid",
          query: { page: index + 1 },
        });
      } else {
        this.$router.push({
          name: "Grid",
          query: { search_result: index + 1 },
        });
      }
      this.$store.dispatch("routeWithBtn", index);
    },
  },
  components: {
    appCard: Card,
  },

  mounted() {
    eventBus.$on("passSearch", (search) => {
      this.search = search;
    });
    debugger;
    if (this.search == null) {
      this.$store.dispatch("accessData");
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0 !important;
}
.paging {
  width: 100%;
  float: left;
}
.card-parent {
  width: 100%;
  float: left;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  column-gap: 2%;
}
.btn-parent {
  width: 100%;
  margin: 20px 0;
  float: left;
}
.btn-parent > div {
  display: flex;
  justify-content: center;
}
.aa {
  background: red !important;
}
</style>