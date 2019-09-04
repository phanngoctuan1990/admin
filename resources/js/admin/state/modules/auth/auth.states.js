import storage from "../../../services/localstorage";

const states = {
    currentUser: storage.getState("auth.currentUser"),
    userProfile: storage.getState("auth.userProfile"),
};

export default states;
