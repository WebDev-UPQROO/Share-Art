import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { getPhoto } from '../../../helpers/getPhoto';

export const ListArtist = ({ artistList, route, action }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            isMounted.current &&
                setLoading(false)
        }, 1000);
    }, []);
    console.log(artistList);
    const isMounted = useRef(true);
    useEffect(() => {
        return () => isMounted.current = false;
    }, [])
        return (
            <div className="artist__item">
                {
                    (!loading)
                        ? (
                            <>
                            
                                <Link to={route} className="artist__item__user">
                                    <picture className="profile-image">
                                        <img src={ getPhoto(artistList?.photo) } alt="default" />
                                    </picture>
                                    <div className="artist__item__name">
                                        <span>{ artistList?.name }</span>
                                    </div>
                                </Link>
    
                                <button className={'btn btn-animation btn-outline ' + (!action && 'selected')}>
                                    {(action) && <i className="fas fa-plus mr-1" />}
                                    <span>{action ? 'Seguir' : 'Siguiendo'}</span>
                                </button>
                            </>
                        )
                        : (
                            <>
                                <div className="loading profile-image mr-1"></div>
                                <div className="loading" style={{ flexGrow: '1', height: '1rem' }}></div>
                            </>
                        )
                }
            </div >
        )
    
   
}

ListArtist.propTypes = {
    route: PropTypes.string.isRequired,
    action: PropTypes.bool.isRequired,
};