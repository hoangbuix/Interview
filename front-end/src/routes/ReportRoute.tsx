import { lazy, Suspense } from "react";
import { PATH } from "../constains/paths";
import Loading from "../components/Loading/Loading";
import { Switch } from "react-router-dom";
import AuthenticatedGuard from "../gaurds/AuthenticatedGuard";
const Report = lazy(() => import("../pages/Report/Report"))


export default function ReportRoutes() {
    return (
        <Switch>
            <AuthenticatedGuard
                exact
                path={PATH.REPORT}
                component={() => (
                    <Suspense fallback={<Loading />}>
                        <Report />
                    </Suspense>
                )}
            />
        </Switch>
    )
}