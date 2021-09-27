import React from 'react';
import { ThreeColsTemplate } from './components/layouts/ThreeColsLayout';

import { library } from '@fortawesome/fontawesome-svg-core'

// Fontawesomme
import {
    faCheckSquare,
    faDraftingCompass,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faCheckSquare,
    faDraftingCompass,
    faArrowRight);

export const ShareArtApp = () => {
    return (
        <ThreeColsTemplate />
    )
}
