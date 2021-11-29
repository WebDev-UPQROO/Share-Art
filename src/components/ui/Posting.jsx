import React from 'react'
import { connect } from 'react-redux';
import { getPhoto } from '../../helpers/getPhoto';
import useModal from '../../hooks/useModal'
import PostingModal from '../modals/PostingModal';

const Posting = ({auth}) => {
    const { toggle, visible } = useModal(false);

    return (
        <div className="posting mb-2">
            <picture className="profile-image">
                <img src={getPhoto(auth?.user?.photo?.url)} alt="profile" />
            </picture>
            <div className="posting__text btn-secondary" onClick={toggle}>
                <span>¿Que quieres mostrarle al mundo?</span>
            </div>
            <PostingModal toggle={toggle} visible={visible} />
        </div>
    )
}

const data = (state) => ({
    auth: state.authReducer
});
export default connect(data)(Posting);
