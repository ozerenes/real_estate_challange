<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex sm6 xs12 md6 lg6>
          <v-card class="ma-3">
            <v-list-item>
              <i style="font-size: 36px" class="far fa-list-alt"></i>
              <v-list-item-content>
                <div class="text-right">List Record</div>
                <v-list-item-title class="headline mb-1 text-right">{{
                  info.length
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg6>
          <v-card class="ma-3">
            <v-list-item>
              <i style="font-size: 36px" class="far fa-plus-square"></i>
              <v-list-item-content>
                <div class="text-right">Create Record</div>
                <v-list-item-title class="headline mb-1 text-right">{{
                  createInfo.length
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>
        <v-flex xs12 md4 lg3 v-for="(value, name) in b" :key="name">
          <v-card class="text-center ma-3">
            <v-responsive class="p-4">
              <v-avatar size="80" class="red lighten-2 mt-4">
                <i class="fas fa-user"></i>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subhrading text-capitalize">
                {{ name }} ({{value}})
                
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
    countName: "",
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
        this.countName = response.data.records.reduce((acc, child) => {
          acc[
            (child.fields.agent_name ? child.fields.agent_name[0] : "").concat(
              " ",
              child.fields.agent_surname ? child.fields.agent_surname[0] : ""
            )
          ] =
            (acc[
              (child.fields.agent_name
                ? child.fields.agent_name[0]
                : ""
              ).concat(
                " ",
                child.fields.agent_surname ? child.fields.agent_surname[0] : ""
              )
            ] || 0) + 1;
          return acc;
        }, {});
        this.b = this.countName;
        
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
