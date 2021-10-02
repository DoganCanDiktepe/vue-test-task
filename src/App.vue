<template>
  <v-app>
    <v-app-bar app dark>
      <v-spacer></v-spacer>
      <v-btn to="/"> Chart </v-btn>
      <v-btn to="/datatable">Datatable</v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view> </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>
