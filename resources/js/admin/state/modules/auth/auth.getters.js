const getters = {
    loggedIn(state) {
        return !!state.currentUser;
    },
    isAdmin(state) {
        return state.userProfile ? state.userProfile.is_admin : false;
    }
};
export default getters;
