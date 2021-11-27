import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getPhoto } from '../../../helpers/getPhoto'
import { connect } from 'react-redux'
import { artistListFollow, artistListUnfollow } from '../../../store/artistList/artistListActions'

const ListArtist = ({ 
        artistList, 
        route, 
        action,
        artistListFollow,
        artistListUnfollow,
    }) => {
  
        useEffect(() => {
            artistListFollow(true);
            //artistListUnfollow();
    
        }, [action]);

    return (
        <div className="artist__item">
{console.log(action)}
            <Link to={route} className="artist__item__user">
                <picture className="profile-image">
                    <img src={getPhoto(artistList?.photo)} alt="default" />
                </picture>
                
                <div className="artist__item__name">
                    <span>{artistList?.name}</span>
                </div>
            </Link>

            {artistList?.follow ? (
                    <button className={'btn btn-animation btn-outline ' + (action && 'selected')} value={artistList?._id} onClick={ artistListUnfollow }>
                   {/*  {<i className="fas fa-plus mr-1" />} Icono para dejar de seguir*/}
                     
                    <span>Siguiendo</span>
                </button>
                ) : (
                    <button className={'btn btn-animation btn-outline ' + (action && 'selected') } value={artistList?._id} onClick={ artistListFollow }>
                    { <i className="fas fa-plus mr-1" />}
                 
                    <span>Seguir</span>
                    </button>
                )
            } 
            
        </div >
    )


}

ListArtist.propTypes = {
    route: PropTypes.string.isRequired,
    action: PropTypes.bool.isRequired,
};

const data = (state) => ({
    followed: state.artistListReducer
});
const actions = {
    artistListFollow,
    artistListUnfollow,
};

export default connect(data, actions)(ListArtist);