import state from "./user.states";
import actions from "./user.actions";
import getters from "./user.getters";
import mutations from "./user.mutations";

export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true
};
