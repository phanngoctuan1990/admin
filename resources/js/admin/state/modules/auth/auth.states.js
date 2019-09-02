import storage from "../../../services/localstorage";

const states = {
    currentUser: storage.getState("auth.currentUser")
};

export default states;
