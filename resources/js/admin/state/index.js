import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from "./modules/auth/auth.module";
import user from "./modules/user/user.module";

export default new Vuex.Store({
    modules: {
        auth,
        user
    }
});
