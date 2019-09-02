// Containers
const DefaultContainer = () => import("../containers/DefaultContainer");

// Views
const Dashboard = () => import("../views/Dashboard");

// Views - Pages
const Page404 = () => import("../views/pages/Page404");
const Page500 = () => import("../views/pages/Page500");
const Login = () => import("../views/pages/Login");

// Users
const Users = () => import("../views/users/Users");
const User = () => import("../views/users/User");

export default [
    {
        path: "/",
        redirect: "/dashboard",
        name: "Home",
        component: DefaultContainer,
        meta: {
            auth: true
        },
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: Dashboard
            },
            {
                path: "users",
                meta: { label: "Users" },
                component: {
                    render(c) {
                        return c("router-view");
                    }
                },
                children: [
                    {
                        path: "",
                        component: Users
                    },
                    {
                        path: ":id",
                        meta: { label: "User Details" },
                        name: "User",
                        component: User
                    }
                ]
            }
        ]
    },
    {
        path: "/pages",
        redirect: "/pages/404",
        name: "Pages",
        component: {
            render(c) {
                return c("router-view");
            }
        },
        meta: {
            auth: false
        },
        children: [
            {
                path: "404",
                name: "Page404",
                component: Page404
            },
            {
                path: "500",
                name: "Page500",
                component: Page500
            },
            {
                path: "login",
                name: "Login",
                component: Login
            }
        ]
    }
];
