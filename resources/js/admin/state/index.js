import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from "./modules/user/user.module";

export default new Vuex.Store({
    modules: {
        user
    }
});
