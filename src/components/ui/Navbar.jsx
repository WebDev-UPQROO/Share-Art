import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { authActions } from '../../reducers/authReducer';
import { routes } from '../../routes/routes';
import { ShareArtContext } from '../../ShareArtContext';

export const Navbar = ({menu: [,setMenu]}) => {
    console.log('nav');
    
    const { user, authDispatch } = useContext(ShareArtContext);
    const history = useHistory();

    const handleMobileMenu = () => {
        setMenu(menu => !menu);
    };

    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        const authAction = {
            type: authActions.login,
            payload: {
                name: 'Hiram'
            }
        };
        authDispatch(authAction);

        history.replace(lastPath);
    };

    return (
        <div className="navbar">
            <div className="navbar__left" >
                <div className="navbar__left__menu btn-animation" onClick={handleMobileMenu}>
                    <FontAwesomeIcon icon="bars" />
                </div>

                <Link to="/" className="btn btn-animation text-none">
                    <img src="./assets/icons/logo.png" alt="logo" className="mr-1" />
                    <span>ShareArt</span>
                </Link>
            </div>

            {
                (user.logged)
                    ?
                    (
                        <div className="navbar__profile">
                            <button className="btn btn-circle btn-animation mr-2">
                                <FontAwesomeIcon icon="bell" className="" />
                            </button>

                            <Link className="btn btn-animation btn-profile mr-2 text-none text-sm" to={routes.profile}>
                                <img src="./assets/temp/user.jfif" alt="profile" />
                                <span>@Nombre_Usuario</span>
                            </Link>
                        </div>
                    )
                    :
                    (
                        <div className="navbar__login">
                            <button className="btn btn-secondary btn-animation mr-2" onClick={handleLogin}>Iniciar Sesión</button>
                            <button className="btn btn-primary btn-animation">Registrarse</button>
                        </div>
                    )
            }
        </div>
    )
}
