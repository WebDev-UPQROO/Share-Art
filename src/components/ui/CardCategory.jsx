import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';

export const CardCategory = ({ image, name, route }) => {

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
        <div className="card-category">
        {
            (!loading)
                ? (
                    <>
                        <div className="category-body">
                            <div className="body__image">
                                <img src= {{image}===undefined ? {image} : './assets/temp/user.jfif'} alt="default" />
                            </div>

                            <div className="body__text">
                                <p>{{name}===undefined ? {name} : 'General'}</p>
                            </div>

                        
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

CardCategory.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
};
