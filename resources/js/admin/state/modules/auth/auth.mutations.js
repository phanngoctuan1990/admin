import storage from "../../../services/localstorage";

const mutations = {
    SET_CURRENT_USER(state, newValue) {
        state.currentUser = newValue;
        storage.setState("auth.currentUser", state);
        storage.setAuthHeader(state);
    },
    SET_PROFILE_USER(state, userProfile) {
        state.userProfile = userProfile;
        storage.setState("auth.userProfile", userProfile);
    }
};

export default mutations;
