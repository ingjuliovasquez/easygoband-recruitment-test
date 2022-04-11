<template>
  <div id="app">
    <h1>List App</h1>
    <div style="text-align:left">
      <small>{{ list.length }} Results</small>
    </div>
    <v-select
      label="name"
      :filterable="false"
      :options="list"
      @search="onSearch"
    ></v-select>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

Vue.component("v-select", vSelect);

export default {
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    // TODO: Get first data to providers when te component is mounted
    const data = await this.getData("");
    this.list = data.data;
  },
  methods: {
    async onSearch(search, loading) {
      if (search.length) {
        loading(true);

        const list = await this.getData(search);
        this.list = list.data;
        loading(false);
      }
    },
    async getData(word) {
      // TODO: Get data of rest node js
      return await axios.get(`http://localhost:3000/get_providers/${word}`);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 20rem;
}
</style>
