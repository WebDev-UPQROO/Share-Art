import React from 'react'
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

export const AuthNavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar__left" >
                <Link to={routes.login} className="btn btn-animation text-none">
                    <img src="/assets/icons/logo.png" alt="logo" className="mr-1" />
                    <span>ShareArt</span>
                </Link>
            </div>
        </div>
    )
}
