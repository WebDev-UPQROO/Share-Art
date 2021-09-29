import React, { useEffect, useReducer, useState } from 'react';
import { AppRouter } from './routes/AppRouter';
import './helpers/fontawesomeHelper';
import { ShareArtContext } from './ShareArtContext';
import { authReducer } from './reducers/authReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
};

export const ShareArtApp = () => {
    const [user, authDispatch] = useReducer(authReducer, {}, init);
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    const mobileMenu = useState(false);

    return (
        <ShareArtContext.Provider value={{ mobileMenu, user, authDispatch }}>
            <AppRouter />
        </ShareArtContext.Provider>
    )
}
