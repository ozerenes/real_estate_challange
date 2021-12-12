<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex sm6 xs12 md6 lg6>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar title class="mt-n7">
                <v-sheet color="green" width="80" height="80" elevation="10">
                  <v-icon dark large>dashboard</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-right">List Record</div>
                <v-list-item-title class="headline mb-1 text-right">{{
                  info.length
                }}</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2" person></v-icon>
              <div class="outline">dsfa</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg6>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar title class="mt-n7">
                <v-sheet color="green" width="80" height="80" elevation="10">
                  <v-icon dark large>store</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-right">Create Record</div>
                <v-list-item-title class="headline mb-1 text-right">{{
                  createInfo.length
                }}</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2" person></v-icon>
              <div class="outline">dsfa</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 md4 lg3 v-for="item in info" :key="item.info">
          <v-card class="text-center ma-3">
            <v-responsive class="p-4">
              <v-avatar size="100" class="red lighten-2">
                <i class="fas fa-user"></i>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subhrading">
                {{ item.fields.agent_name ? item.fields.agent_name[0] : "" }}
                {{
                  item.fields.agent_surname ? item.fields.agent_surname[0] : ""
                }}
              </div>
            </v-card-text>
            <v-card-text>
              <div class="subhrading">
                {{ item.fields.agent_name ? item.fields.agent_name[0] : "" }}
                {{
                  item.fields.agent_surname ? item.fields.agent_surname[0] : ""
                }}
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    info: null,
    createInfo: null,
    keyword: "",
  }),
  mounted() {
    this.$axios
      .request({
        method: "get",
        baseURL: "https://api.airtable.com/v0/appgykZBGTF92MnHu/Appointments",
        headers: {
          Authorization: "Bearer keyNvUWqLnkuKavv7",
        },
      })
      .then((response) => {
        this.info = response.data.records;
      })
      .catch((error) => {
        console.log(error);
      });
    this.$axios
      .request({
        method: "get",
        baseURL: "https://api.airtable.com/v0/appgykZBGTF92MnHu/Agents",
        headers: {
          Authorization: "Bearer keyNvUWqLnkuKavv7",
        },
      })
      .then((response) => {
        this.createInfo = response.data.records;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
