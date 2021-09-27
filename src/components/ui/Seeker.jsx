import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Seeker = () => {
    return (
        <form className="seeker">
            <FontAwesomeIcon icon="search" className="seeker-icon" />
            <input
                type="text"
                placeholder="Buscar en ShareArt"
                className="seeker-input"
            />
        </form>
    )
}
