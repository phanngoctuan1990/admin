import http from "../../../services/http";

const actions = {
    async fetch({ commit }) {
        try {
            const { data } = await http.get("/dashboard");
            return data;
        } catch (error) {
            console.error(error);
        }
    }
};

export default actions;
