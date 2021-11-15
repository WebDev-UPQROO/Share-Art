import React from 'react'
import { userEditName } from '../../store/user/userActions'
import { connect } from 'react-redux'
import { getPhoto } from '../../helpers/getPhoto'
import { Link } from 'react-router-dom'
import { routes } from '../../routes/routes'

const ProfileInfo = ({ user: { user, loading, error }, uid }) => {
    return (
        <div className="profile mb-2">
            {
                (!loading && !error) ? (
                    <>
                        <div className="profile__background">
                        </div>
                        <div className="profile__content">
                            <picture className="profile-image lg">
                                <img src={getPhoto(user.photo)} alt="default" />
                            </picture>

                            {
                                (uid === user?._id)
                                    ? <Link to={routes.configs}
                                        className='profile__content__config btn btn-animation btn-outline ml-auto mb-2'
                                    >
                                        <i className="fas fa-pen mr-1" />
                                        <span>Editar Perfil</span>
                                    </Link>
                                    :
                                    <button
                                        className={'btn btn-animation btn-outline ml-auto mb-2' + (false && 'selected')}
                                        onClick={() => userEditName('nuevo')}
                                    >
                                        {(true) && <i className="fas fa-plus mr-1" />}
                                        <span>{true ? 'Seguir' : 'Siguiendo'}</span>
                                    </button>
                            }


                            <h2 className="profile__content__name">{user.name}</h2>
                            <p className="profile__content__user mb-1">{user.username}</p>

                            <p className="mb-1">{user.bio}</p>
                            {
                                (user.age) &&
                                <p>
                                    <i className="fas fa-user mr-1" />
                                    <span>Edad: {user.age} años</span>
                                </p>
                            }


                            {
                                (user?.categories?.length > 0) &&
                                (<>
                                    <p className="mt-2">
                                        <i className="fas fa-drafting-compass mr-1" />
                                        <span>Intereses</span>
                                    </p>

                                    <div className="profile__content__categories mb-3 mt-1">

                                        {
                                            (user.categories) &&
                                            user.categories.map(category => (
                                                <div className="check" key={category._id}>
                                                    <label>
                                                        <i className={`fas fa-${category.icon} mr-1`} />
                                                        {category.name}
                                                    </label>
                                                </div>
                                            )
                                            )
                                        }

                                    </div>
                                </>)
                            }


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
                    </>
                )
                    : (
                        <>
                            <div className="profile__background">
                            </div>
                            <div className="profile__content">

                                <div className="d-flex">
                                    <div className="loading profile-image lg mr-1"></div>
                                </div>
                                <div className="loading mb-2" style={{ marginLeft: 'auto', width: '10rem', height: '3rem' }}></div>

                                <div className="loading mb-2" style={{ width: '100%', height: '10rem' }}></div>
                                <div className="loading mb-1" style={{ width: '100%', height: '2rem' }}></div>
                            </div>
                        </>
                    )
            }
        </div>
    )
}

const data = (state) => ({ user: state.userReducer });
export default connect(data)(ProfileInfo);
