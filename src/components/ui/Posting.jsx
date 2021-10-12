import React from 'react'

export const Posting = () => {
    return (
        <div className="posting mb-2">
            <picture className="profile-image">
                <img src='./assets/temp/user.jfif' alt="profile"/>
            </picture>
            <div className="posting__text btn-secondary">
                <span>¿Que quieres mostrarle al mundo?</span>
            </div>
        </div>
    )
}
