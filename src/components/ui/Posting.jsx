import React from 'react'
import useModal from '../../hooks/useModal'
import PostingModal from '../modals/PostingModal';

export const Posting = () => {
    const { toggle, visible } = useModal(false);

    return (
        <div className="posting mb-2">
            <picture className="profile-image">
                <img src='/assets/temp/user.jfif' alt="profile" />
            </picture>
            <div className="posting__text btn-secondary" onClick={toggle}>
                <span>¿Que quieres mostrarle al mundo?</span>
            </div>
            <PostingModal toggle={toggle} visible={visible} />
        </div>
    )
}
