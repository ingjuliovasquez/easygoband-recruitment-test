<template>
  <div id="app">
    <h1>List App</h1>
    <v-select
      :options="list"
      :reduce="(name) => name.sessions[0].name"
      label="name"
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
    const data = await this.getData();
    this.list = data.data;

    // TODO: Add and get supplier data every 5 seconds
    setInterval(() => {
      this.addData();
    }, 5000);
  },
  methods: {
    async getData() { // TODO: Get data of rest AWS
      const headers = { Authorization: "Basic cJmAc71jah17sgqi1jqaksvaksda=" };

      return await axios.get(
        "https://pnny0h3cuf.execute-api.eu-west-1.amazonaws.com/dev/providers/1",
        { headers }
      );
    },
    async addData() { // TODO: Add providets data to database, and refresh list of providers
      const data = await this.getData();
      await axios.post("/rest/add", data.data);

      this.list = data.data;
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
