import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ProfileInfo = () => {
    return (
        <div className="profile mb-2">
            <div className="profile__background">
            </div>
            <div className="profile__content text-sm">
                <picture className="profile-image lg">
                    <img src='./assets/temp/user.jfif' alt="default" />
                </picture>

                <button
                    className={'btn btn-animation btn-outline ml-auto mb-2' + (false && 'selected')}
                >
                    {(true) && <FontAwesomeIcon icon="plus" />}
                    <span>{true ? 'Seguir' : 'Siguiendo'}</span>
                </button>

                <h2 className="profile__content__name">Nombre completo</h2>
                <p className="profile__content__user mb-1">@usuario</p>

                <p className="mb-1">aqui va a ir la descripcion de prueba de la persona, esto esta en verion alpha</p>

                <p>
                    <FontAwesomeIcon icon="user" className="mr-1" />
                    <span>Edad: 34 años</span>
                </p>

                <p className="mt-2">
                    <FontAwesomeIcon icon="drafting-compass" className="mr-1" />
                    <span>Intereses</span>
                </p>

                <div className="profile__content__categories mb-1 mt-1">

                    <div className="check">
                        <label>
                            <FontAwesomeIcon icon="drafting-compass" className="mr-1" />
                            Categoria 1
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
