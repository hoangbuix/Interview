import React from "react";
import { Switch } from "react-router";
// import Loading from "../components/Loading/Loading";
// import AuthenticatedGuard from "../guards/AuthenticatedGuard";
import Home from "../pages/Home/Home";
// const Home = lazy(() => import("../pages/Home/Home"))

const HomeRoute = () => {
    return (
        <Switch>
            {/* <AuthenticatedGuard
                exact={true}
                path={`${'/home'}`}
                component={() => (
                <Suspense fallback={<Loading />}>
                    <Home />
                </Suspense>
                )}
            />    */}
            <Home/>
        </Switch>
    )
};

export default HomeRoute;