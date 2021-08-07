import React, { lazy, Suspense } from "react"
import { Switch } from "react-router-dom"
import Loading from "../components/Loading/Loading"
import { PATH } from "../constains/paths";
import AuthenticatedGuard from "../gaurds/AuthenticatedGuard";


const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
export default function DashboardRoutes() {
    return (
        <Switch>
            <AuthenticatedGuard
                exact
                path={PATH.DASHBOARD}
                component={() => (
                    <Suspense fallback={<Loading />}>
                        <Dashboard />
                    </Suspense>
                )}
            />

        </Switch>
    )
}