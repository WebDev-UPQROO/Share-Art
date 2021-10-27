import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';

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
                                <div className="image__size">
                                    <img src={{ image } === undefined ? { image } : '/assets/temp/user.jfif'} alt="default" />
                                </div>
                            </div>
                            <div className="group-info">
                                <p className="info__title btn-animation"> <a href='#' className="no-text-decoration"> {{ name } === undefined ? { name } : 'Grupo de artistas'}</a> </p>
                                <p className="info__count"> {{ count } === undefined ? { count } : '13k integrantes '} </p>
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
                            <div className="loading" style={{ width: '65%' }}></div>
                            <div className="d-flex align-items-center mb-0 p-0" style={{ width: '130%' }}>
                                <div className="" style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: '10px' }}>
                                    <div className="loading" style={{ width: '17rem', height: '2rem', marginBottom: '5px' }}></div>
                                    <div className="post__link loading mb-1" style={{ width: '10rem', height: '1.5rem', margin: '0px' }}></div>
                                </div>
                            </div>
                            <div className="loading" style={{ width: '45%', height: '2.5rem', marginTop: 'auto', marginBottom: 'auto', marginRight: '25px' }}></div>
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
