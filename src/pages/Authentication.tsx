import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signup from './auth/Signup';
import Login from './auth/Login';
import PropTypes, { InferProps } from 'prop-types';

// TODO rename to Auth.jsx
function Authentication({ loginHandler, signupHandler }: InferProps<typeof Authentication.propTypes>) {
    // TODO I think this logic should be moved to App.jsx
    // TODO think of a better way to render the routes
    // TODO send feedback if user adds wrong credentials
    const renderRoutes = (): JSX.Element => {
        let routes = (<>
            <Route
                path="/"
                exact
                render={p => (
                    <Login
                        {...p}
                        onLogin={loginHandler}
                    />
                )}
            />
            <Route
                path="/signup"
                exact
                render={p => (
                    <Signup
                        {...p}
                        onSignup={signupHandler}
                    />
                )}
            />
            <Redirect to="/" />
        </>);
        return routes;
    };

    return (
        <>
            <Switch>
                {renderRoutes()}
            </Switch>
        </>
    )
};

Authentication.propTypes = {
    loginHandler: PropTypes.func.isRequired,
    signupHandler: PropTypes.func.isRequired
};

export default Authentication;