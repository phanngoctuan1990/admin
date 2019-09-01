import Vue from "vue";
import store from "../state";
import routes from "./routes";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: "hash", // https://router.vuejs.org/api/#mode
    linkActiveClass: "open active",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    }
});

router.beforeEach((routeTo, routeFrom, next) => {
    // Check if auth is required on this route
    // (including nested routes).
    const authRequired = routeTo.matched.some(route => route.meta.auth);

    // If auth isn't required for the route, just continue.
    if (!authRequired) return next();
    if (store.getters["auth/loggedIn"]) {
        return store.dispatch("auth/fetchProfile").then(validUser => {
            validUser ? next() : redirectToLogin();
        });
    }
    // If auth is required and the user is NOT currently logged in,
    // redirect to login.
    redirectToLogin();
    function redirectToLogin() {
        // Pass the original route to the login component
        next({ name: "Login" });
    }
});

export default router;
