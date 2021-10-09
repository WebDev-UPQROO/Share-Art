import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';

export const Group = ({ image, name, route, count, action }) => {

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
        <div className="group">
        {
            (!loading)
                ? (
                    <>
                        <div className="group__left">
                            <div className="group__image">
                                <img src= {{image}===undefined ? {image} : './assets/temp/user.jfif'} alt="default" />
                            </div>
                        </div>
                        <div className="group__center">
                            <p className="title btn-animation"> <a href='#' className="no-text-decoration"> {{name}===undefined ? {name} : 'Grupo de artistas'}</a> </p>
                            <p className="count"> {{count}===undefined ? {count} : '13k integrantes '} </p>
                        </div>
                        <div className="group__right">
                            <button className={'btn btn-animation btn-outline ' + (!action && 'selected')}>
                                {(action) && <FontAwesomeIcon icon="plus" />}
                                <span>{action ? 'Seguir' : 'Siguiendo'}</span>
                            </button>
                        </div>
                    </>               
                )
                :
                (
                    <>
                        <div className="loading" style={{ width: '60%', height: '10rem' }}></div>
                        <div className="d-flex align-items-center mb-0 p-0" style={{ width: '130%', height: '10rem' }}>
                            <div className="d-in-block my-auto">
                                <div className="loading" style={{ width: '17rem', height: '2rem' }}></div>
                                <div className="post__link loading mb-1" style={{ width: '6rem', height: '1rem' }}></div>
                            </div>
                        </div>
                        <div className="loading" style={{ width: '50%', height: '2rem' }}></div>
                    </>
                )
        }

    </div >
)
}

Group.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
};
