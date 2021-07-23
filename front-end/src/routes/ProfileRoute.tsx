import React, { lazy, Suspense } from "react"
import { Switch } from "react-router-dom"
import Loading from "../components/Loading/Loading"
import { PATH } from "../constains/paths";
import AuthenticatedGuard from "../gaurds/AuthenticatedGuard";

const Profile = lazy(() => import("../pages/Profile/Profile"));
export default function ProfileRoutes() {
    return (
        <Switch>
            <AuthenticatedGuard
                exact
                path={PATH.PROFILE}
                component={() => (
                    <Suspense fallback={<Loading />}>
                        <Profile />
                    </Suspense>
                )}
            />
            <AuthenticatedGuard
                exact
                path={PATH.PROFILE + "/:idUser"}
                component={() => (
                    <Suspense fallback={<Loading />}>
                        <Profile />
                    </Suspense>
                )}
            />
        </Switch>
    )
}