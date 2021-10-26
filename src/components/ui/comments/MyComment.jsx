import React from 'react'

export const MyComment = () => {
    return (
        <div className="my-comment">
            <picture className="profile-image">
                <img
                    src='/assets/temp/user.jfif'
                    alt="profile"
                />
            </picture>
            <input
                className="my-comment__input input input-secondary ml-1"
                placeholder="Escribe un comentario..."
            />
        </div>
    )
}
