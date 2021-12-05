import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import moment from "moment";

Vue.prototype.moment = moment;

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    }
});
