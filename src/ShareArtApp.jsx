import React from 'react';
import { ThreeColsTemplate } from './components/layouts/ThreeColsLayout';

import { library } from '@fortawesome/fontawesome-svg-core'

// Fontawesomme
import {
    faCheckSquare,
    faDraftingCompass,
    faArrowRight,
    faUser,
    faCog,
    faQuestionCircle,
    faThLarge,
    faUsers,
    faChild,
    faComment,
    faSearch,
    faBell,
    faChevronDown,
    faBars,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faCheckSquare,
    faDraftingCompass,
    faArrowRight,
    faUser,
    faCog,
    faQuestionCircle,
    faThLarge,
    faUsers,
    faChild,
    faComment,
    faSearch,
    faBell,
    faChevronDown,
    faBars,
);

export const ShareArtApp = () => {
    return (
        <ThreeColsTemplate />
    )
}
