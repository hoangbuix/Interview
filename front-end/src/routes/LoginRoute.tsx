import { lazy, Suspense } from "react";
import { PATH } from "../constains/paths";
import Loading from "../components/Loading/Loading";
import { Route, Switch } from "react-router-dom";
const Login = lazy(() => import("../pages/Login/Login"))


export default function LoginRoutes() {
    return (
        <Switch>
            <Route
                path={PATH.LOGIN}
                component={() => (
                    <Suspense fallback={<Loading />}>
                        <Login />
                    </Suspense>
                )}
            />
        </Switch>
    )
}