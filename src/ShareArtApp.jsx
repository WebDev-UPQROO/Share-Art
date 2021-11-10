import React, { useEffect, useReducer } from 'react';
import { AppRouter } from './routes/AppRouter';
import { ShareArtContext } from './ShareArtContext';
import { authReducer } from './reducers/authReducer';
import { Provider } from 'react-redux';
import store from './store/store';


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
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </ShareArtContext.Provider>
    )
}
