const actions = {
    async login({ commit, dispatch, getters }, payload) {
        if (getters.loggedIn) return dispatch("fetchProfile");
        try {
            const { data } = await axios.post("/api/auth/login", payload);
            return data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                commit("SET_CURRENT_USER", null);
            }
            throw error;
        }
    },
    async fetchProfile({ commit, state }) {
        if (!state.currentUser) return Promise.resolve(null);
        try {
            const { data } = await axios.get("/api/user");
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
