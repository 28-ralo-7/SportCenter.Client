import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import RegisterPage from "./pages/RegisterPage";
import {
    Switch,
    Redirect,
    BrowserRouter,
    Route
} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import React from "react";
import PrivateRoute from "./PrivateRoutes";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const AppRouter = () => {

    return (
        <BrowserRouter >
            <Switch>
                <Route path="/home" exact component={HomePage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/contact" exact component={ContactPage} />
                <Route path="/auth" exact component={AuthPage} />
                <Route path="/register" exact component={RegisterPage}/>
                <PrivateRoute path="/users" exact component={UsersPage} role="admin"/>


                <Redirect to="/home"/>
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;