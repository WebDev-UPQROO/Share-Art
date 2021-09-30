import React, { useEffect, useReducer } from 'react';
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

    return (
        <ShareArtContext.Provider value={{ user, authDispatch }}>
            <AppRouter />
        </ShareArtContext.Provider>
    )
}
