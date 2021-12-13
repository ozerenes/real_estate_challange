<template>
  <div>
    <v-content class="blue-grey lighten-4 pa-0">
      <v-container>
        <v-row class="mb-4">
          <v-col sm="12" class="pa-0">
            <v-col sm="12" class="mt-4">
              <v-card class="mt-3 rounded-sm rounded-t-lg">
                <v-row>
                  <v-col sm="3" class="pa-1 d-flex justify-center align-center">
                    <v-card-text class="text-primary ml-10 pa-0">
                      <div>Total Count : {{ info.data.records.length }}</div>
                    </v-card-text>
                  </v-col>
                  <v-col
                    sm="8"
                    class="pa-1 d-flex justify-center align-center ml-8 mt-5"
                  >
                    <v-autocomplete
                      class="pa-0"
                      auto-select-first
                      chips
                      clearable
                      deletable-chips
                      filled
                      multiple
                      small-chips
                      solo
                      solo-inverted
                      v-model="selected"
                      :items="filter"
                      :search-input.sync="search"
                      item-value="key"
                      item-text="text"
                      return-object
                    ></v-autocomplete>
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
                        Id
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
                      >
                        Appointment Date
                        <v-btn v-on:click="getSort" x-small class="pa-0 ml-1">
                          <v-icon>sort</v-icon>
                        </v-btn>
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
                  <v-col sm="2" class="pa-1">
                    <v-card-text class="text-primary pa-0">
                      <v-card-actions
                        class="mt-2 text-caption-h6 pa-2 white--text"
                      >
                        Contact Phone
                      </v-card-actions>
                    </v-card-text>
                  </v-col>
                  <v-col sm="1" class="pa-1">
                    <v-card-text class="text-primary pa-0">
                      <v-card-actions
                        class="mt-2 text-caption-h6 pa-2 white--text pl-0"
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
              <v-card :class="getColor(elem.fields.appointment_date)">
                <v-row class="mt-3">
                  <v-col sm="1">
                    <v-card-text class="text-primary">
                      <div>{{ elem.fields.appointment_id }}</div>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2">
                    <v-card-text class="text-primary">
                      <div class="text-capitalize">
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
                  <v-col sm="2" class="d-flex align-center">
                    <v-card-text class="text-primary pa-0">
                      <div class="text-capitalize">
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
                  <v-col sm="2" class="d-flex align-center">
                    <v-card-text class="text-primary pa-0">
                      <div>
                        {{ moment(elem.fields.appointment_date).format("L") }}
                        {{ moment(elem.fields.appointment_date).format("LT") }}
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2" class="d-flex align-center">
                    <v-card-text class="text-primary pa-0">
                      <div>
                        {{
                          elem.fields.contact_email
                            ? elem.fields.contact_email[0]
                            : ""
                        }}
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col sm="2" class="d-flex align-center">
                    <v-card-text class="text-primary pa-0">
                      <div>
                        {{
                          elem.fields.contact_phone
                            ? elem.fields.contact_phone[0]
                            : ""
                        }}
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col
                    sm="1"
                    class="pa-1 d-flex justify-center align-center flex-column pr-6"
                  >
                    <v-btn @click.stop="dialog = true" x-small class="mt-1">
                      <v-icon>delete</v-icon>
                    </v-btn>

                    <v-dialog v-model="dialog" max-width="290">
                      <v-card>
                        <v-card-title class="text-h5">
                          Do you want to delete this record?
                        </v-card-title>

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                          >
                            NO
                          </v-btn>

                          <v-btn
                            color="green darken-1"
                            text
                            v-on:click="deleteC(elem.fields.appointment_id), dialog = false"
                            x-small
                            class="mt-1"
                          >
                            YES
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
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
  </div>
</template>

<script>
export default {
  name: "List",
  data: () => ({
    selected: [],
    oldestFirst: false,
    info: null,
    menu: false,
    sorteDate: false,
    allinfo: [],
    filter: [],
    dialog: false,
    search: null,
  }),
  mounted() {
    let _this = this;
    this.$axios
      .request({
        method: "get",
        baseURL: "https://api.airtable.com/v0/appgykZBGTF92MnHu/Appointments",
        headers: {
          Authorization: "Bearer keyNvUWqLnkuKavv7",
        },
      })
      .then((response) => {
        this.info = { ...response };

        this.filter = [];
        response.data.records.map((elem) => {
          let hasFilter = _this.filter.filter(
            (item) => item.key == elem.fields.agent_id[0]
          );
          if (!hasFilter.length) {
            this.filter.push({
              key: elem.fields.agent_id[0],
              text: (elem.fields.agent_name
                ? elem.fields.agent_name[0]
                : ""
              ).concat(
                " ",
                elem.fields.agent_surname ? elem.fields.agent_surname[0] : ""
              ),
            });
          }

          this.allinfo.push(elem);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  watch: {
    selected: function (val) {
      this.info.data.records = [];

      if (val.length > 0) {
        this.allinfo.map((item) => {
          val.map((elem) => {
            if (elem.key == item.fields.agent_id[0]) {
              this.info.data.records.push(item);
            }
          });
        });
      } else {
        this.info.data.records = this.allinfo;
      }
    },
  },
  methods: {
    getSort: function () {
      this.sorteDate = !this.sorteDate;
      if (this.sorteDate == false) {
        this.info.data.records = this.info.data.records.sort(function (a, b) {
          return b.fields.appointment_date.localeCompare(
            a.fields.appointment_date
          );
        });
      } else {
        this.info.data.records = this.info.data.records.sort(function (b, a) {
          return b.fields.appointment_date.localeCompare(
            a.fields.appointment_date
          );
        });
      }
    },

    getColor(itemDate) {
      const today = new Date();
      itemDate = new Date(itemDate);
      if (today > itemDate) {
        return "red";
      } else {
        return "gray";
      }
    },
    deleteC: function (id) {
      this.info.data.records = this.info.data.records.filter(
        (item) => item.fields.appointment_id != id
      );
    },
    //  update item
    // update(record) {
    //   let id = record.fields.appointment_id;
    //   this.info.data.records = this.info.data.records.map((item) => {
    //     if (item.fields.appointment_id == id) {
    //       item = record;
    //     }
    //     return item;
    //   });
    // },
    // add item
    // insert(record) {
    //   this.info.data.record.push(record);
    // },
  },
};
</script>
