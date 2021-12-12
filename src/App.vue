<template>
  <v-app>
    <Nav />
    <v-main class="blue-grey lighten-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
  data: () => ({
    selected: [],
    oldestFirst: false,
    info: null,
    menu: false,
    sorteDate: false,
  }),
  
};
</script>
