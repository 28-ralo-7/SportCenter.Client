import {Redirect, Route} from "react-router-dom";

const PrivateRoute = ({ component: Component, role,  ...rest }: any) => {
    const userRole = localStorage.getItem("userRole");
    const isAuthenticated = userRole === role;
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/auth" }} />
                )
            }
        />
    );
};

export default PrivateRoute;