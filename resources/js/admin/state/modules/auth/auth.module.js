import state from "./auth.states";
import actions from "./auth.actions";
import getters from "./auth.getters";
import mutations from "./auth.mutations";

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};
