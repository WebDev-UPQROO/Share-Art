import React from 'react'

export const ProfileInfo = () => {
    return (
        <div className="profile mb-2">
            <div className="profile__background">
            </div>
            <div className="profile__content">
                <picture className="profile-image lg">
                    <img src='/assets/temp/user.jfif' alt="default" />
                </picture>

                <button
                    className={'btn btn-animation btn-outline ml-auto mb-2' + (false && 'selected')}
                >
                    {(true) && <i className="fas fa-plus mr-1" />}
                    <span>{true ? 'Seguir' : 'Siguiendo'}</span>
                </button>

                <h2 className="profile__content__name">Nombre completo</h2>
                <p className="profile__content__user mb-1">@usuario</p>

                <p className="mb-1">aqui va a ir la descripcion de prueba de la persona, esto esta en verion alpha</p>

                <p>
                    <i className="fas fa-user mr-1" />
                    <span>Edad: 34 años</span>
                </p>

                <p className="mt-2">
                    <i className="fas fa-drafting-compass mr-1" />
                    <span>Intereses</span>
                </p>

                <div className="profile__content__categories mb-3 mt-1">

                    <div className="check">
                        <label>
                            <i className="fas fa-drafting-compass mr-1" />
                            Categoria 1
                        </label>
                    </div>
                </div>

                <div className="profile__content__follows">
                    <button className="btn btn-secondary btn-animation">
                        <b>Seguidores</b>
                        <p>100k</p>
                    </button>
                    <button className="btn btn-secondary btn-animation">
                        <b>Siguiendo</b>
                        <p>100k</p>
                    </button>
                    <button className="btn btn-secondary btn-animation">
                        <b>Grupos</b>
                        <p>100k</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
