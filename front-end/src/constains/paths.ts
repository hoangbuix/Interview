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
    DASHBOARD: "/dashboard"
};

const DashboardPath = [
    {
        path: "/dashboard",
        component: DashboardLayout,
        exact: true,
        routes: [
            {
                path: "/dashboard/user",
                component: User
            },
            {
                path: "/dashboard/teacher",
                component: Teacher
            }
        ]
    }
];

export default DashboardPath;
