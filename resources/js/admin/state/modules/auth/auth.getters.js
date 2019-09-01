const getters = {
    loggedIn(state) {
        return !!state.currentUser;
    }
};
export default getters;
