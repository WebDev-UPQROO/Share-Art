import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const NavbarView = () => {
    return (
        <div className="navbar">


            <div className="navbar__logo btn btn-animation">
                <FontAwesomeIcon icon="bars" className="mr-3 navbar__logo__menu" />
                <img src="./assets/icons/logo.png" alt="logo" className="mr-1" />
                <span>ShareArt</span>
            </div>
            {/* <div className="navbar__login">
                <button className="btn btn-secondary btn-animation mr-2">Iniciar Sesión</button>
                <button className="btn btn-primary btn-animation">Registrarse</button>
            </div> */}

            <div className="navbar__profile">
                <button className="btn btn-circle btn-animation mr-2">
                    <FontAwesomeIcon icon="bell" className="" />
                </button>

                <button className="btn btn-animation btn-profile mr-2">
                    <img src="./assets/temp/user.jfif" alt="profile" />
                    <span>@Nombre_Usuario</span>
                </button>

                <button className="btn btn-circle btn-animation">
                    <FontAwesomeIcon icon="chevron-down" className="" />
                </button>
            </div>





        </div>
    )
}
