<template>
    <nav>
        <v-navigation-drawer class="rounded-r-xl" v-model="drawer" app clipped floating temporary>
      <v-list dense>
        <v-row class="ma-3 mb-3">
        <v-toolbar-title class="align-center">
          <span class="text-lg-h6">iceberg-digital.co.uk</span>
        </v-toolbar-title>
        </v-row>
        <v-list-item v-for="item in items" :key="item.icon">
          <v-list-item-action>
          <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
          <v-list-item-title>{{item.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </nav>
</template>

<script>

export default {
    data:() => ({
        drawer:false,
        links: [
            {icon:"mdi-youtube-subscription", text:"hello", route: "/home"},
            {icon:"mdi-history", text:"hello", route: "/home"},
            {icon:"mdi-trending-up", text:"hi"},
            {icon:"mdi-playlist-play", text:"hello"}
        ]
    })
}
</script>
