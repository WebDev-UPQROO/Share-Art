import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes/routes'

export const RegisterView = () => {
    return (
        <div>
            <div className="login">

                <div className="login__container">
                    <div>
                        <div>
                            <h3>Unete a ShareArt hoy mismo</h3>
                            <span className="text-sm">Crear una nueva cuenta</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="form-item full">
                            <label htmlFor="name">Nombre Completo</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Nombre Completo"
                                className="form-input input"
                            />
                        </div>

                        <div className="form-item full">
                            <label htmlFor="username">Nombre de Usuario</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Nombre de Usuario"
                                className="form-input input"
                            />
                        </div>

                        <div className="form-item full">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Correo Electrónico"
                                className="form-input input"
                            />
                        </div>

                        <div className="form-item full mb-1">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                id="password"
                                type="text"
                                placeholder="Contraseña"
                                className="form-input input"
                            />
                        </div>

                        <div>
                            <button className="btn btn-animation btn-primary w-100 mb-3 text-xs text-none">
                                Crear cuenta
                            </button>

                            <span className="text-xs d-in-block mb-1">Ya tienes una cuenta?</span>
                            <Link
                                to={routes.login}
                                className="btn btn-animation btn-secondary w-100 text-xs text-none">
                                Iniciar Sesión
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
