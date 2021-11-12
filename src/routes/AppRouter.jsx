import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { routes } from './routes';
import Menu from '../components/ui/Menu';
import Navbar from '../components/ui/Navbar';

import MainView from '../components/views/MainView';
import { ExploreView } from '../components/views/ExploreView';
import ProfileView from '../components/views/ProfileView';
import { SettingView } from '../components/views/SettingView';
import { HelpView } from '../components/views/HelpView';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import LoginView from '../components/views/LoginView';
import { RegisterView } from '../components/views/RegisterView';
import { AuthNavBar } from '../components/ui/AuthNavBar';

import { connect } from 'react-redux';


const AppRouter = ({ user }) => {
    useEffect(() => {
        localStorage.setItem('uid', user.uid);
    }, [user.uid]);

    const menu = useState(false);

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth">
                        <AuthNavBar />
                        <div className="layout">
                            <Switch>
                                <Route path={routes.login} component={LoginView} />
                                <Route path={routes.register} component={RegisterView} />
                                <Redirect to={routes.login} />
                            </Switch>
                        </div>
                    </Route>

                    <Route path="/app">
                        <Navbar menu={menu} />

                        <div className="layout">


                            <Menu menu={menu} />

                            <Switch>
                                <PublicRoute
                                    exact
                                    path={routes.home}
                                    component={MainView}
                                    isAuthenticated={user.uid}
                                />
                                <PublicRoute
                                    exact
                                    path={routes.explore}
                                    component={ExploreView}
                                    isAuthenticated={user.uid}
                                />

                                <PrivateRoute
                                    exact
                                    path={routes.profile}
                                    component={ProfileView}
                                    isAuthenticated={user.uid}
                                />
                                <PrivateRoute
                                    exact
                                    path={routes.configs}
                                    component={SettingView}
                                    isAuthenticated={user.uid}
                                />
                                <PrivateRoute
                                    exact
                                    path={routes.help}
                                    component={HelpView}
                                    isAuthenticated={user.uid}
                                />
                                <Redirect to={routes.home} />
                            </Switch>


                        </div>
                    </Route>

                    <Redirect to={routes.home} />

                </Switch>


            </div>
        </Router>
    )
}

const data = (state) => ({ user: state.authReducer });
export default connect(data)(AppRouter);