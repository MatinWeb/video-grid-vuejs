<template>
  <div class="search_header">
    <v-toolbar dark color="red darken-1">
      <v-toolbar-title>Search Box</v-toolbar-title>
      <v-autocomplete
        v-model="select"
        :loading="loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Search here..."
        solo-inverted
        auto-select-first
        clearable
      ></v-autocomplete>
      <v-btn
        icon
        @click="searching"
        style="margin-right: 2px"
      >
        click
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      dataSearch: [],
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  computed: {
    baseInfos() {
      return this.$store.getters.baseInfos;
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;
      this.dataSearch = this.baseInfos.map((el) => {
        return el.Title;
      });
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.dataSearch.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    },

    searching() {
      if (this.search != null) {
        this.$router.push({ name: 'Grid', query: { search_result: 1 } }).catch(()=>{})
        this.$store.dispatch("searching", this.search);
        eventBus.$emit("passSearch", this.search);
      }
    },
  },
};
</script>

<style scoped>
.search_header {
  margin-bottom: 10px;
}
</style>