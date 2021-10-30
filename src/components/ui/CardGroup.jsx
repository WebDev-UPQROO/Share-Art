import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const CardGroup = ({ image, name, count, route, action }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            isMounted.current &&
                setLoading(false)
        }, 3000);
    }, [])

    const isMounted = useRef(true);
    useEffect(() => {
        return () => isMounted.current = false;
    }, [])


    return (
        <div className="card-group">
            {
                (!loading)
                    ? (
                        <>
                            <div className="group-image">
                                <img
                                    src={{ image } === undefined ? { image } : '/assets/temp/user.jfif'} alt="group"
                                />
                            </div>
                            <div className="group-info">
                                <p className="info__title btn-animation">
                                    <Link to={route} className="no-text-decoration">
                                        {{ name } === undefined ? { name } : 'Grupo de artistas'}
                                    </Link>
                                </p>
                                <p className="info__count">
                                    {{ count } === undefined ? { count } : '13k integrantes '}
                                </p>
                            </div>
                            <div className="group-button">
                                <button className={'btn btn-animation btn-outline ' + (!action && 'selected')}>
                                    {(action) && <i className="fas fa-plus mr-1" />}
                                    <span>{action ? 'Seguir' : 'Siguiendo'}</span>
                                </button>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div className="loading" style={{ width: '10rem' }}></div>
                            <div
                                className="d-flex ml-1"
                                style={{ width: 'calc( 100% - 13rem)', justifyContent: 'space-between' }}
                            >
                                <div style={{ margin: 'auto 0' }}>
                                    <div
                                        className="loading"
                                        style={{ width: '13rem', height: '2rem', marginBottom: '5px' }}
                                    >
                                    </div>
                                    <div
                                        className="post__link loading mb-1"
                                        style={{ width: '10rem', height: '1.5rem' }}
                                    >
                                    </div>
                                </div>
                                <div className="loading" style={{ width: '5rem', height: '2.5rem', margin: 'auto 0' }}>
                                </div>
                            </div>

                        </>
                    )
            }

        </div >
    )
}

CardGroup.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    route: PropTypes.string.isRequired,
    action: PropTypes.bool.isRequired
};
