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
                   
                        <div className="loading" style={{ width: '125px', height: '125px', marginTop: '20px', marginRight: 'auto', marginBottom: '5px', marginLeft: 'auto' }}></div>
                        <div className="loading" style={{ width: '8rem', height: '2rem', marginLeft: 'auto', marginRight: 'auto' }}></div>
                    
                        
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
