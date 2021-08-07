import BarChart from "../layouts/DashboardLayout/Chart/BarChart";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Teacher from "../layouts/DashboardLayout/Teacher/Teacher";
import User from "../layouts/DashboardLayout/User/User";

export const PATH = {
    HOME: "/",
    PROFILE: "/profile",
    LOGIN: "/login",
    REGISTER: "/register",
    REPORT: "/report",
    DASHBOARD: "/dashboard",
    CUSTOMER: '/customer'
};



export const SideBar_Item = [
    {
        "display_name": "Dashboard",
        "route": "/",
        "icon": "bx bx-category-alt"
    },
    {
        "display_name": "Customers",
        "route": "/customers",
        "icon": "bx bx-user-pin"
    },
    {
        "display_name": "Products",
        "route": "/products",
        "icon": "bx bx-package"
    },
    {
        "display_name": "Orders",
        "route": "/orders",
        "icon": "bx bx-cart"
    },
    {
        "display_name": "Analytics",
        "route": "/analytics",
        "icon": "bx bx-bar-chart-alt"
    },
    {
        "display_name": "categories",
        "route": "/categories",
        "icon": "bx bx-list-ol"
    },
    {
        "display_name": "discount",
        "route": "/discount",
        "icon": "bx bx-gift"
    },
    {
        "display_name": "inventory",
        "route": "/inventory",
        "icon": "bx bx-store-alt"
    },
    {
        "display_name": "settings",
        "route": "/settings",
        "icon": "bx bx-cog"
    }
]
