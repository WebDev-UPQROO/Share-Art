import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { routes } from './routes';
import Menu from '../components/ui/Menu';
import Navbar from '../components/ui/Navbar';

import MainView from '../components/views/MainView';
import ExploreView from '../components/views/ExploreView';
import ProfileView from '../components/views/ProfileView';
import ArtistView from '../components/views/ArtistView';
import { SettingView } from '../components/views/SettingView';
import { HelpView } from '../components/views/HelpView';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import LoginView from '../components/views/LoginView';
import { RegisterView } from '../components/views/RegisterView';
import { AuthNavBar } from '../components/ui/AuthNavBar';

import { connect } from 'react-redux';
import ScrollToTop from '../components/ScrollToTop';
import { EditProfileView } from '../components/views/configs/EditProfileView';
import { EditPersonalView } from '../components/views/configs/EditPersonalView';
import { EditPassword } from '../components/views/configs/EditPassword';


const AppRouter = ({ user: { user } }) => {
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const menu = useState(false);

    return (
        <Router>
            <div>
                <ScrollToTop />
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
                                    isAuthenticated={user?._id}
                                />
                                <PublicRoute
                                    exact
                                    path={routes.explore}
                                    component={ExploreView}
                                    isAuthenticated={user?._id}
                                />

                                <PublicRoute
                                    exact
                                    path={routes.artistFollowers}
                                    component={ArtistView}
                                    isAuthenticated={user?._id}
                                />

                                <PublicRoute
                                    exact
                                    path={routes.artistFollowed}
                                    component={ArtistView}
                                    isAuthenticated={user?._id}
                                />

                                <PrivateRoute
                                    exact
                                    path={routes.profile + ":uid"}
                                    component={ProfileView}
                                    isAuthenticated={user?._id}
                                />

                                <Route path={routes.configs}>
                                    <Switch>
                                        <PrivateRoute
                                            exact
                                            path={routes.configs}
                                            component={SettingView}
                                            isAuthenticated={user?._id}
                                        />

                                        <PrivateRoute
                                            exact
                                            path={routes.configsProfile}
                                            component={EditProfileView}
                                            isAuthenticated={user?._id}
                                        />

                                        <PrivateRoute
                                            exact
                                            path={routes.configsPersonal}
                                            component={EditPersonalView}
                                            isAuthenticated={user?._id}
                                        />

                                        <PrivateRoute
                                            exact
                                            path={routes.configsPassword}
                                            component={EditPassword}
                                            isAuthenticated={user?._id}
                                        />

                                        <Redirect to={routes.configs} />
                                    </Switch>
                                </Route>

                                <PrivateRoute
                                    exact
                                    path={routes.help}
                                    component={HelpView}
                                    isAuthenticated={user?._id}
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