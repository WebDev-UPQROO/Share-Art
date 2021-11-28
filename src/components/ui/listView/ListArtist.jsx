import React from 'react'
import { Link } from 'react-router-dom'
import { getPhoto } from '../../../helpers/getPhoto'
import { connect } from 'react-redux'
import { artistListFollow, artistListUnfollow }
    from '../../../store/artistList/artistListActions'
import { routes } from '../../../routes/routes'
import { selectArtist } from '../../../selectors/artistSelectors'

const ListArtist = ({
    artist,
    artistListFollow,
    artistListUnfollow,
}) => {

    return (
        <div className="artist__item">
            <Link to={routes.artist} className="artist__item__user">
                <picture className="profile-image">
                    <img src={getPhoto(artist?.photo)} alt="default" />
                </picture>

                <div className="artist__item__name">
                    <span>{artist?.name}</span>
                </div>
            </Link>

            {artist?.follow ? (
                <button className={
                        'btn btn-animation btn-outline ' 
                        + (artist?.follow && 'selected')
                    } 
                        onClick={() => artistListUnfollow(artist?._id)}>
                    {
                    /*  {<i className="fas fa-plus mr-1" />} Icono para dejar de seguir*/}
                    <span>Siguiendo</span>
                </button>
            ) : (
                <button
                    className={
                        'btn btn-animation btn-outline '
                        + (artist?.follow && 'selected')
                    }
                    onClick={() => artistListFollow(artist?._id)}
                >
                    <i className="fas fa-plus mr-1" />
                    <span>Seguir</span>
                </button>
            )
            }

        </div >
    )

}

const data = (state, { id }) => ({
    artist: selectArtist(id, state.artistListReducer),
});
const actions = {
    artistListFollow,
    artistListUnfollow,
};

export default connect(data, actions)(ListArtist);