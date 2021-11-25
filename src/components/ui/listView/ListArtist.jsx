import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { getPhoto } from '../../../helpers/getPhoto';

export const ListArtist = ({ artistList, route, action }) => {
    return (
        <div className="artist__item">

            <Link to={route} className="artist__item__user">
                <picture className="profile-image">
                    <img src={getPhoto(artistList?.photo)} alt="default" />
                </picture>
                <div className="artist__item__name">
                    <span>{artistList?.name}</span>
                </div>
            </Link>

            <button className={'btn btn-animation btn-outline ' + (!action && 'selected')}>
                {(action) && <i className="fas fa-plus mr-1" />}
                <span>{action ? 'Seguir' : 'Siguiendo'}</span>
            </button>
            
        </div >
    )


}

ListArtist.propTypes = {
    route: PropTypes.string.isRequired,
    action: PropTypes.bool.isRequired,
};