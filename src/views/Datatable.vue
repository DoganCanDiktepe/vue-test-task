<template>
  <v-card>
    <v-card-title>
      Coin Desk
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="tableItems"
      :items-per-page="10"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Date", value: "date" },
        { text: "Price", value: "price" },
      ],
      tableItems: [],
    };
  },
  watch: {
    search() {},
  },
  async created() {
    await axios
      .get(
        "https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-12-31"
      )
      .then((response) => {
        const data = response.data.bpi;
        const newData = Object.keys(data).map((item) => {
          return { date: item, price: data[item] };
        });
        this.tableItems = newData;
      })
      .catch(() => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>
