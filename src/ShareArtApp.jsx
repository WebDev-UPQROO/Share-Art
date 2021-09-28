import React, { useState } from 'react';
import { AppRouter } from './routes/AppRouter';
import './helpers/fontawesomeHelper';
import { ShareArtContext } from './ShareArtContext';

export const ShareArtApp = () => {
    const mobileMenu = useState(false);
    const isLogged = useState(false);

    return (
        <ShareArtContext.Provider value={{mobileMenu, isLogged}}>
            <AppRouter />
        </ShareArtContext.Provider>
    )
}
