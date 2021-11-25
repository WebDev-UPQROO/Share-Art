import React from 'react'
import { Link } from 'react-router-dom'
import { getPhoto } from '../../../helpers/getPhoto'
import { routes } from '../../../routes/routes'

export const EditProfileView = () => {
    return (
        <div className="main-full">
            <Link to={routes.configs} className="btn-animation btn-link">
                <i className="fas fa-arrow-left" />
                <span className="ml-2">Regresar</span>
            </Link>
            <h1 className="mb-5 mt-2">Mi Perfil</h1>

            <span>Foto de perfil</span>

            <div className="edit-profile mt-2">
                <div className="edit-profile__photo">
                    <picture className="profile-image lg">
                        <img src={getPhoto(null)} alt="default" />
                    </picture>

                    <button className="edit-profile__photo--edit">
                        Modificar
                    </button>

                    <button className="edit-profile__photo--delete">
                        Eliminar
                    </button>
                </div>

                <div className="edit-profile__form mt-4">
                    <label htmlFor="description">Descripción</label>
                    <textarea name="description" id="description" rows="8"></textarea>

                    <label htmlFor="age">Cumpleaños</label>
                    <input type="date" name="age" id="age" />

                    <label htmlFor="like">Intereses</label>

                    <div className="edit-profile__form--interests">
                        <div className="check">
                            <input type="checkbox" id="photo" name="photo" />
                            <label htmlFor="photo">
                                <i className={`fas fa-camera mr-1`} />
                                Fotografia
                            </label>
                        </div>

                        <div className="check">
                            <input type="checkbox" id="music" name="music" />
                            <label htmlFor="music">
                                <i className={`fas fa-music mr-1`} />
                                Música
                            </label>
                        </div>

                        <div className="check">
                            <input type="checkbox" id="paint" name="paint" />
                            <label htmlFor="paint">
                                <i className={`fas fa-palette mr-1`} />
                                Pintura
                            </label>
                        </div>

                        <div className="check">
                            <input type="checkbox" id="sculpture" name="sculpture" />
                            <label htmlFor="sculpture">
                                <i className={`fas fa-paint-brush mr-1`} />
                                Escultura
                            </label>
                        </div>
                    </div>

                    <div className="edit-profile__form--buttons mt-2 mb-5">
                        <Link to={routes.configs} className="cancel">
                            Cancelar
                        </Link>

                        <button className="submit">
                            Modificar
                        </button>

                    </div>


                </div>
            </div>

        </div>
    )
}
