import React from 'react'

export const Seeker = () => {
    return (
        <form className="seeker">
            <i className="fas fa-search seeker-icon" />
            <input
                type="text"
                placeholder="Buscar en ShareArt"
                className="seeker-input"
            />
        </form>
    )
}
