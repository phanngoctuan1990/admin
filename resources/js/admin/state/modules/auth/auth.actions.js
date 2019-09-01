const actions = {
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
