import React, { lazy, Suspense } from "react"
import { Switch } from "react-router-dom"
import Loading from "../components/Loading/Loading"
import { PATH } from "../constains/paths";
import AuthenticatedGuard from "../gaurds/AuthenticatedGuard";

const Home = lazy(() => import("../pages/Home/Home"));
export default function HomeRoutes() {
    return (
        <Switch>
            <AuthenticatedGuard
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