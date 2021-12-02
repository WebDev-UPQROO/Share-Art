import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { getPhoto } from '../../helpers/getPhoto';

const Navbar = ({ menu: [menu, setMenu], auth: { user } }) => {
    const handleMobileMenu = () => {
        setMenu(menu => !menu);
    };

    return (
        <div className="navbar">
            <div className="navbar__left" >
                <div className="navbar__left__menu btn-animation">
                    <input type="checkbox" id="menu" className={menu ? 'active' : ''} />
                    <label className="menu-icon" htmlFor="menu" onClick={handleMobileMenu}>
                        <div className="bar-icon bar1" />
                        <div className="bar-icon bar2" />
                        <div className="bar-icon bar3" />
                    </label>
                </div>

                <Link to={routes.home} className="navbar__left__text btn btn-animation text-none">
                    <img src="/assets/icons/logo.png" alt="logo" className="mr-1" />
                    <span>ShareArt</span>
                </Link>
            </div>

            {
                (user?._id)
                    ?
                    (
                        <div className="navbar__profile">
                            <button className="btn btn-secondary btn-circle btn-animation mr-2">
                                <i className="fas fa-bell" />
                            </button>

                            <Link className="btn btn-secondary btn-animation btn-profile text-none" to={routes.profile + user._id}>
                                <picture className="profile-image">
                                    <img src={getPhoto(user?.photo?.url)} alt="profile" />
                                </picture>
                                <span>@{user?.username ?? "Username"}</span>
                            </Link>
                        </div>
                    )
                    :
                    (
                        <div className="navbar__login">
                            <Link
                                to={routes.login}
                                className="btn btn-secondary btn-animation mr-2"
                            >
                                Iniciar Sesión
                            </Link>
                            <Link
                                to={routes.register}
                                className="btn btn-primary btn-animation text-none"
                            >
                                Registrarse
                            </Link>
                        </div>
                    )
            }
        </div>
    )
}

const data = (state) => ({ auth: state.authReducer });
export default connect(data)(Navbar);