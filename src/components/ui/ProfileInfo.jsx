import React, { useEffect } from 'react'
import { userEditName, userGetInfo } from '../../store/user/userActions'
import { connect } from 'react-redux'

const ProfileInfo = ({ user, userEditName, userGetInfo }) => {
    useEffect(() => {
        userGetInfo('6169a793fc358e71ee5fee8f');
    }, [userGetInfo]);

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
                    onClick={() => userEditName('nuevo')}
                >
                    {(true) && <i className="fas fa-plus mr-1" />}
                    <span>{true ? 'Seguir' : 'Siguiendo'}</span>
                </button>

                <h2 className="profile__content__name">{user.user.name}</h2>
                <p className="profile__content__user mb-1">{user.user.username}</p>

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

const data = (state) => ({ user: state.userReducer });
const actions = { userEditName, userGetInfo };

export default connect(data, actions)(ProfileInfo);
