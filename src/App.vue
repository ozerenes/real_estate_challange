<template>
  <v-app>
    <v-navigation-drawer class="rounded-r-xl" v-model="drawer" app clipped floating temporary>
      <v-list dense>
        <v-row class="ma-3 mb-3">
        <v-toolbar-title class="align-center">
          <span class="text-lg-h6">iceberg-digital.co.uk</span>
        </v-toolbar-title>
        </v-row>
        <v-list-item v-for="item in items" :key="item.icon" link>
          <v-list-item-action>
          <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
          <v-list-item-title>{{item.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"/>
      <v-toolbar-title class="align-center">
        <span class="text-lg-h6">iceberg-digital.co.uk</span>
      </v-toolbar-title>
      <v-spacer/>
      <button>
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="250" offset-x>
          <template v-slot:activator="{on}">
            <v-avatar size="40">
              <v-icon v-on="on">mdi-cog</v-icon>
            </v-avatar>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-avatar color="primary" size="56"></v-avatar>
                <v-list-item-content class="ml-3">
                  <v-list-item-title>Enes Özer</v-list-item-title>
                  <v-list-item-subtitle>Front-end Web Developer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider/>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="theme" color="purple"/>
                </v-list-item-action>
                <v-list-item-title>Themes</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="primary" text @click="menu=false">
                Logout
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </button>
    </v-app-bar>
    <v-content class="blue-grey lighten-4">
      <v-container>
        <v-row class="mb-4">
          <v-col sm="12" class="mt-4">
            <v-card class="mt-3 rounded-sm rounded-t-lg">
               <v-row>
                 <v-col sm="9" class="pa-1">
                   <v-card-text class="text-primary ml-6 pa-0">
                  <div>Total Count : 200</div>
                </v-card-text>
                 </v-col>
                 <v-col sm="3" class="pa-1">
                   <v-card-actions class="ml-12 mt-2">
                   
                   </v-card-actions>
                 </v-col>
                </v-row>
            </v-card>
          </v-col>
          <v-col sm="12">
            <v-card class="blue-grey darken-2">
               <v-row>
                 <v-col sm="9" class="pa-1">
                   <v-card-text class="text-primary ml-6 pa-0">
                    <v-card-actions class="mt-2 text-caption-h6 pa-2 white--text">
                      Name
                    </v-card-actions>
                </v-card-text>
                 </v-col>
                 <v-col sm="3" class="pa-1">
                   <v-card-text class="text-primary ml-6 pa-0">
                    <v-card-actions class="ml-12 mt-2 text-caption-h6 pa-2 white--text">
                      Operations
                    </v-card-actions>
                   </v-card-text>
                 </v-col>
                </v-row>
            </v-card>
          </v-col>
          <v-col sm="12" v-for="item in info" :key="item.records">
            <v-card>
               <v-row class="mt-3">
                 <v-col sm="9" class="pa-1">
                   <v-card-text class="text-primary ml-6">
                  <div>{{item}}</div>
                </v-card-text>
                 </v-col>
                 <v-col sm="3" class="pa-1">
                    <v-card-actions>
                  <v-btn color="red" text>Delete</v-btn>
                  <v-btn color="orange" text>Show Detail</v-btn>
                    </v-card-actions>
                 </v-col>
                </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    items:[
      {icon:"mdi-trending-up", text:"hello"},
      {icon:"mdi-youtube-subscription", text:"hello"},
      {icon:"mdi-history", text:"hello"},
      {icon:"mdi-trending-up", text:"hi"},
      {icon:"mdi-playlist-play", text:"hello"},
      {icon:"mdi-trending-up", text:"hi"},
      {icon:"mdi-trending-up", text:"hello"},
      {icon:"mdi-trending-up", text:"hello"}
    ],
    info: null,
    drawer:false,
    menu:false,
    theme:false
  }),
  mounted () {
        this.$axios
          .request({
            method: 'get',
            baseURL: 'https://api.airtable.com/v0/appgykZBGTF92MnHu/Appointments?maxRecords=3&view=Grid%20view',
            headers: {
                'Authorization': 'Bearer keyNvUWqLnkuKavv7',
            }
          })
          .then(response => {
            this.info = response
          })
      },
  watch:{
    theme:function(next){
      this.$vuetify.theme.dark=next
    }
  }
};
</script>
