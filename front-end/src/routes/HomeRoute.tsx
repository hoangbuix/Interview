import React, { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import Loading from "../components/Loading/Loading"
import { PATH } from "../constains/paths";
// import AuthenticatedGuard from "../gaurds/AuthenticatedGuard";

const Home = lazy(() => import("../pages/Home/Home"));
export default function HomeRoutes() {
    return (
        <Switch>
            <Route
                exact
                path={PATH.HOME}
                component={() => (
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                )}
            />
        </Switch>
    )
}