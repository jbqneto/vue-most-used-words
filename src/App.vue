<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({
    //
  })
};
</script>
