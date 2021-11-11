import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { useHistory } from 'react-router'
import { authHandleLogin } from '../../store/auth/authActions'
import { connect } from 'react-redux'

const LoginView = ({ authHandleLogin }) => {
    const history = useHistory();

    return (
        <div className="login">

            <div className="login__container">
                <div>
                    <div>
                        <h3>Inicio de Sesión</h3>
                        <span>Ingresa tu usuario y contraseña para continuar</span>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="form-item full">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            id="email"
                            type="text"
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

                    <div className="mb-3">
                        <button onClick={() => authHandleLogin("qewe", "wqqwe", history)} className="btn btn-animation btn-primary w-100 mb-3">
                            Iniciar Sesión
                        </button>

                        <span className="text-xs d-in-block mb-1">Aun no tienes una cuenta?</span>

                        <Link
                            to={routes.register}
                            className="btn btn-animation btn-secondary w-100 text-xs text-none">
                            Crear Cuenta
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

const actions = { authHandleLogin };
export default connect(null, actions)(LoginView);