import React from "react";
import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router";

interface ReduxProps {
    isAuthenticated?: boolean;
}

interface Props extends ReduxProps, RouteProps {
    component: React.ComponentType<RouteComponentProps>;
}

const AuthenticatedGuard = (props: Props) => {
    const {isAuthenticated, component: Component, ...rest} = props;
    return (
        <Route
            {...rest}
            render={props => {
                if(!isAuthenticated && !localStorage.getItem("token")){
                    return <Redirect to="/login"/>
                }
                return <Component {...props} />
            }}
        />
    )
};

export default AuthenticatedGuard;