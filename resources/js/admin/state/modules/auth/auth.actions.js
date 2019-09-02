import http from "../../../services/http";
import storage from "../../../services/localstorage";

const actions = {
    init({ state }) {
        storage.setAuthHeader(state.currentUser);
    },
    async login({ commit, dispatch, getters }, payload) {
        if (getters.loggedIn) return dispatch("fetchProfile");
        try {
            const { data } = await http.post("/auth/login", payload);
            commit("SET_CURRENT_USER", data);
            return data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                commit("SET_CURRENT_USER", null);
            }
            throw error;
        }
    },
    async logOut({ commit }) {
        try {
            const { data } = await http.post("/auth/logout");
            commit("SET_CURRENT_USER", null);
            commit("SET_PROFILE_USER", null);
            return data;
        } catch (error) {
            commit("SET_CURRENT_USER", null);
            commit("SET_PROFILE_USER", null);
            throw error;
        }
    },
    async fetchProfile({ commit, state }) {
        try {
            const { data } = await http.get("/auth/me");
            commit("SET_PROFILE_USER", data);
            return data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                commit("SET_CURRENT_USER", null);
            }
            return null;
        }
    }
};

export default actions;
