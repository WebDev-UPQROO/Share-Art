import React from 'react';
import { Redirect, Route } from 'react-router';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { routes } from './routes';
import { Menu } from '../components/ui/menu/Menu';
import { Navbar } from '../components/ui/Navbar';

import { MainView } from '../components/views/MainView';
import { ExploreView } from '../components/views/ExploreView';
import { ProfileView } from '../components/views/ProfileView';
import { SettingView } from '../components/views/SettingView';
import { HelpView } from '../components/views/HelpView';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <div className="layout">
                    <Menu />

                    <Switch>
                        <Route exact path={routes.home} component={MainView} />
                        <Route exact path={routes.explore} component={ExploreView} />
                        <Route exact path={routes.profile} component={ProfileView} />
                        <Route exact path={routes.configs} component={SettingView} />
                        <Route exact path={routes.help} component={HelpView} />
                        <Redirect to="/" />
                    </Switch>
                </div>

            </div>
        </Router>
    )
}
