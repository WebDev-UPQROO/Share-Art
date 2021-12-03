import React from 'react'
import { Link } from 'react-router-dom'
import { getPhoto } from '../../../helpers/getPhoto'
import { connect } from 'react-redux'
import { artistHandleFollow } from '../../../store/artistList/artistListActions'
import { routes } from '../../../routes/routes'

const ListArtist = ({
    auth,
    artist,
    artistHandleFollow,
}) => {
    return (
        <div className="artist__item">
            <Link to={routes.profile + artist?._id} className="artist__item__user">
                <picture className="profile-image">
                    <img src={getPhoto(artist?.photo?.url)} alt="default" />
                </picture>

                <div className="artist__item__name">
                    <span>{artist?.username}</span>
                </div>
            </Link>

            {artist._id !== auth?.user?._id && (
                artist?.follow ? (
                    <button className={
                        'btn btn-animation btn-outline '
                        + (artist?.follow && 'selected')
                    }
                        onClick={() => artistHandleFollow(auth?.user?._id, artist)}>
                        <span>Siguiendo</span>
                    </button>
                ) : (
                    <button
                        className={
                            'btn btn-animation btn-outline '
                            + (artist?.follow && 'selected')
                        }
                        onClick={() => artistHandleFollow(auth?.user?._id, artist)}
                    >
                        <i className="fas fa-plus mr-1" />
                        <span>Seguir</span>
                    </button>
                )

            )}


        </div >
    )

}

const actions = {
    artistHandleFollow
};
const data = (state) => ({
    auth: state.authReducer
});

export default connect(data, actions)(ListArtist);