<template>
  <nav>
    <v-app-bar dense elevation="3" flat outlined color="dark" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">iceberg-digital.co.uk</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="250"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-avatar size="40">
            <v-icon v-on="on">mdi-cog</v-icon>
          </v-avatar>
        </template>
        <v-card>
          <v-list>
            <v-list-item>
              <v-avatar color="primary" size="56"><i class="fas fa-user"></i></v-avatar>
              <v-list-item-content class="ml-3">
                <v-list-item-title>Enes Özer</v-list-item-title>
                <v-list-item-subtitle>Front-end Web Developer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider />
          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="theme" color="purple" />
              </v-list-item-action>
              <v-list-item-title>Themes</v-list-item-title>
            </v-list-item>
          </v-list>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" text @click="menu = false"> Logout </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" class="deep-dark accent-4" dark app>
      <v-layout column align-center>
        <v-flex align-center class="mt-5">
          <v-avatar color="white" size="80"><i style="font-size: 26px" class="fas fa-user"></i></v-avatar>
          <p class="white--text subheading mt-1 text-center">Enes Özer</p>
        </v-flex>
        <v-flex class="mt-4 mb-4"> </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    menu: false,
    theme: false,
    links: [
      { icon: "dashboard", text: "Dashboard", route: "/" },
      { icon: "folder", text: "List", route: "/list" }
    ],
  }),
  watch: {
    theme: function (next) {
      this.$vuetify.theme.dark = next;
    },
  },
};
</script>
<style scoped>
.border {
  border-left: 4px solid #970101;
}
</style>
