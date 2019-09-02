import http from "../../../services/http";

const actions = {
    async fetch({ commit }, payload) {
        try {
            let queryString = `?page=${payload.page}`;
            if (payload.hasOwnProperty("keyword")) {
                queryString += `&search=${payload.keyword}`;
            }
            const { data } = await http.get("/users" + queryString);
            return data;
        } catch (error) {
            console.error(error);
        }
    }
};

export default actions;
