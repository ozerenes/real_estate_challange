<template>
  <v-app>
    <Nav />
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="align-center">
        <span class="text-lg-h6">iceberg-digital.co.uk</span>
      </v-toolbar-title>
      <v-spacer />
      <button>
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
                <v-avatar color="primary" size="56"></v-avatar>
                <v-list-item-content class="ml-3">
                  <v-list-item-title>Enes Özer</v-list-item-title>
                  <v-list-item-subtitle
                    >Front-end Web Developer</v-list-item-subtitle
                  >
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
      </button>
    </v-app-bar>
    <v-content class="blue-grey lighten-4">
      <v-container>
        <v-row class="mb-4">
          <v-col sm="12" class="pa-0">
            <v-col sm="12" class="mt-4">
              <v-card class="mt-3 rounded-sm rounded-t-lg">
                <v-row>
                  <v-col sm="9" class="pa-1">
                    <v-card-text class="text-primary ml-6 pa-0">
                      <div>Total Count : {{ info.data.records.length }}</div>
                      <v-autocomplete
                        auto-select-first
                        clearable
                        multiple
                        small-chips
                        v-model="selected"
                        :items="filter"
                        :search-input.sync="search"
                      ></v-autocomplete>
                    </v-card-text>
                  </v-col>
                  <v-col sm="3" class="pa-1">
                    <v-card-actions class="ml-12 mt-2">
                      <select v-model="selected">
                        <option
                          v-for="elem in info.data.records"
                          :key="elem.records"
                        >
                          {{
                            elem.fields.agent_name
                              ? elem.fields.agent_name[0]
                              : ""
                          }}
                          {{
                            elem.fields.agent_surname
                              ? elem.fields.agent_surname[0]
                              : ""
                          }}
                        </option>
                      </select>
                      <span>Selected: {{ selected }}</span>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col sm="12">
              <v-card class="blue-grey darken-2">
                <v-row>
                  <v-col sm="1" class="pa-1">
                    <v-card-text class="text-primary ml-6 pa-0">
                      <v-card-actions
                        class="mt-2 text-caption-h6 pa-2 white--text"
                      >
                        Appointment Id
                      </v-card-actions>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2" class="pa-1">
                    <v-card-text class="text-primary ml-6 pa-0">
                      <v-card-actions
                        class="mt-2 text-caption-h6 pa-2 white--text"
                      >
                        Agent Name
                      </v-card-actions>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2" class="pa-1">
                    <v-card-text class="text-primary pa-0">
                      <v-card-actions
                        class="mt-2 text-caption-h6 pa-2 white--text"
                      >
                        Contact Name
                      </v-card-actions>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2" class="pa-1">
                    <v-card-text class="text-primary pa-0">
                      <v-card-actions
                        class="mt-2 text-caption-h6 pa-2 white--text"
                        v-on:click="toggleSort()"
                      >
                        Appointment Date <span v-if="oldestFirst">+</span>
                        <span v-else>-</span>
                      </v-card-actions>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2" class="pa-1">
                    <v-card-text class="text-primary pa-0">
                      <v-card-actions
                        class="mt-2 text-caption-h6 pa-2 white--text"
                      >
                        Contact E-mail
                      </v-card-actions>
                    </v-card-text>
                  </v-col>
                  <v-col sm="1" class="pa-1">
                    <v-card-text class="text-primary pa-0">
                      <v-card-actions
                        class="mt-2 text-caption-h6 pa-2 white--text"
                      >
                        Contact Phone
                      </v-card-actions>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2" class="pa-1">
                    <v-card-text class="text-primary pa-0">
                      <v-card-actions
                        class="mt-2 text-caption-h6 pa-2 white--text"
                      >
                        Operations
                      </v-card-actions>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-col>
          <v-col sm="12" v-for="item in info" :key="item.records" class="pa-0">
            <v-col
              sm="12"
              v-for="(elem, index) in item.records"
              :key="elem.records"
              :value="index"
            >
              <v-card>
                <v-row class="mt-3">
                  <v-col sm="1">
                    <v-card-text class="text-primary">
                      <div>{{ elem.fields.appointment_id }}</div>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2">
                    <v-card-text class="text-primary">
                      <div>
                        {{
                          elem.fields.agent_name
                            ? elem.fields.agent_name[0]
                            : ""
                        }}
                        {{
                          elem.fields.agent_surname
                            ? elem.fields.agent_surname[0]
                            : ""
                        }}
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2">
                    <v-card-text class="text-primary">
                      <div>
                        {{
                          elem.fields.contact_name
                            ? elem.fields.contact_name[0]
                            : ""
                        }}
                        {{
                          elem.fields.contact_surname
                            ? elem.fields.contact_surname[0]
                            : ""
                        }}
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2">
                    <v-card-text class="text-primary">
                      <div>
                        {{ moment(elem.fields.appointment_date).format("L") }}
                        {{ moment(elem.fields.appointment_date).format("LT") }}
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2">
                    <v-card-text class="text-primary">
                      <div>
                        {{
                          elem.fields.contact_email
                            ? elem.fields.contact_email[0]
                            : ""
                        }}
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col sm="1">
                    <v-card-text class="text-primary">
                      <div>
                        {{
                          elem.fields.contact_phone
                            ? elem.fields.contact_phone[0]
                            : ""
                        }}
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2">
                    <v-card-actions>
                      <v-btn color="yellow" text>Edit</v-btn>
                      <v-btn color="red" text>Delete</v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
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
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
  data: () => ({
    selected: "",
    oldestFirst: false,
    info: null,
    drawer: false,
    menu: false,
    theme: false,
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
        response.data.records.sort(function (a, b) {
          return b.fields.appointment_date.localeCompare(
            a.fields.appointment_date
          );
        });
        this.info = response;
        this.filter = [];
        response.data.records.map((elem) => {
          this.filter.push(
            (elem.fields.agent_name ? elem.fields.agent_name[0] : "").concat(
              " ",
              elem.fields.agent_surname ? elem.fields.agent_surname[0] : ""
            )
          );
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  watch: {
    theme: function (next) {
      this.$vuetify.theme.dark = next;
    },
  },
  methods: {
    toggleSort: function () {
      this.oldestFirst = !this.oldestFirst;
    },
  },
};
</script>
