import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { authHandleLogin } from '../../store/auth/authActions';
import { useHistory } from 'react-router';
import { getPhoto } from '../../helpers/getPhoto';

const Navbar = ({ menu: [menu, setMenu], auth: { user }, authHandleLogin, }) => {
    const history = useHistory();

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
                                    <img src={getPhoto(user?.photo)} alt="profile" />
                                </picture>
                                <span>{user?.username ?? "Username"}</span>
                            </Link>
                        </div>
                    )
                    :
                    (
                        <div className="navbar__login">
                            <button className="btn btn-secondary btn-animation mr-2" onClick={() => authHandleLogin('weqeq', 'qweqeqw', history)}>Iniciar Sesión</button>
                            <button className="btn btn-primary btn-animation">Registrarse</button>
                        </div>
                    )
            }
        </div>
    )
}

const data = (state) => ({ auth: state.authReducer });
const actions = { authHandleLogin };
export default connect(data, actions)(Navbar);