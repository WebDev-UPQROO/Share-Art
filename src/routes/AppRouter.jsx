import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { routes } from './routes';
import { Menu } from '../components/ui/Menu';
import { Navbar } from '../components/ui/Navbar';

import { MainView } from '../components/views/MainView';
import { ExploreView } from '../components/views/ExploreView';
import { ProfileView } from '../components/views/ProfileView';
import { SettingView } from '../components/views/SettingView';
import { HelpView } from '../components/views/HelpView';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { ShareArtContext } from '../ShareArtContext';

export const AppRouter = () => {
    const { user } = useContext(ShareArtContext);
    const menu = useState(false);

    return (
        <Router>
            <div>
                <Navbar menu={menu} />

                <div className="layout">
                    <Menu menu={menu} />

                    <Switch>
                        <PublicRoute
                            exact
                            path={routes.home}
                            component={MainView}
                            isAuthenticated={user.logged}
                        />
                        <PublicRoute
                            exact
                            path={routes.explore}
                            component={ExploreView}
                            isAuthenticated={user.logged}
                        />

                        <PrivateRoute
                            exact
                            path={routes.profile}
                            component={ProfileView}
                            isAuthenticated={user.logged}
                        />
                        <PrivateRoute
                            exact
                            path={routes.configs}
                            component={SettingView}
                            isAuthenticated={user.logged}
                        />
                        <PrivateRoute
                            exact
                            path={routes.help}
                            component={HelpView}
                            isAuthenticated={user.logged}
                        />

                        <Redirect to="/" />
                    </Switch>
                </div>

            </div>
        </Router>
    )
}
