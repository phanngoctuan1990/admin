import axios from "axios";
const storage = {
    getState(key) {
        return JSON.parse(window.localStorage.getItem(key));
    },
    setState(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    },
    setAuthHeader(state) {
        axios.defaults.headers.common.Authorization = state.currentUser
            ? state.currentUser.token_type +
              " " +
              state.currentUser.access_token
            : "";
    }
};

export default storage;
