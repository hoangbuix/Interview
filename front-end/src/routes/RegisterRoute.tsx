import { lazy, Suspense } from "react";
import { PATH } from "../constains/paths";
import Loading from "../components/Loading/Loading";
import { Route, Switch } from "react-router-dom";
const Register = lazy(() => import("../pages/Register/Register"))


export default function RegisterRoutes() {
    return (
        <Switch>
            <Route
                path={PATH.REGISTER}
                component={() => (
                    <Suspense fallback={<Loading />}>
                        <Register />
                    </Suspense>
                )}
            />
        </Switch>
    )
}