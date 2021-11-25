import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../routes/routes'

export const EditPersonalView = () => {
    return (
        <div className="main-full">
            <Link to={routes.configs} className="btn-animation btn-link">
                <i className="fas fa-arrow-left" />
                <span className="ml-2">Regresar</span>
            </Link>
            <h1 className="mb-5 mt-2">Datos Personales</h1>

            <div className="edit-personal__form">

                <label htmlFor="age">Nombre Completo</label>
                <input type="text" name="age" id="age" />

                <label htmlFor="age">Nombre de Usuario</label>
                <input type="text" name="age" id="age" />

                <label htmlFor="age">Correo Electrónico</label>
                <input type="email" name="age" id="age" />

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
    )
}
