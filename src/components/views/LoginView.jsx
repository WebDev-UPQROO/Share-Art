import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { useHistory } from 'react-router'
import { authHandleLogin } from '../../store/auth/authActions'
import { connect } from 'react-redux'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import { ErrorForm } from '../ui/notifications/ErrorForm'
import { toast } from 'react-toastify'


const LoginView = ({ auth, authHandleLogin }) => {
    const history = useHistory();

    useEffect(() => {
        if (auth.error !== null)
            toast.error(auth.error);
    }, [auth.error]);

    return (
        <div className="login">

            <div className="login__container">
                <div>
                    <div>
                        <h3>Inicio de Sesión</h3>
                        <span>Ingresa tu usuario y contraseña para continuar</span>
                    </div>
                </div>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                    }}

                    validationSchema={Yup.object({
                        username: Yup.string()
                            .required('Ingresa tu correo electrónico'),
                        password: Yup.string()
                            .min(5, 'Debe ser mínimo de 8 caracteres')
                            .required('Ingresa tu contraseña'),
                    })}

                    onSubmit={(values, handleReset) => authHandleLogin(values, history, handleReset)}
                >
                    <Form className="mt-3">
                        <div className="form-item full">
                            <label htmlFor="username">Nombre de usuario</label>
                            <div className="form-input username-input">
                                <Field
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Nombre de usuario"
                                    className="input"
                                />
                            </div>

                            <ErrorMessage name="username">
                                {msg => <ErrorForm>{msg}</ErrorForm>}
                            </ErrorMessage>
                        </div>

                        <div className="form-item full mb-1">
                            <label htmlFor="password">Contraseña</label>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Contraseña"
                                className="form-input input"
                            />
                            <ErrorMessage name="password">
                                {msg => <ErrorForm>{msg}</ErrorForm>}
                            </ErrorMessage>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className="btn btn-animation btn-primary w-100 mb-3" disabled={auth.loading}>
                                {
                                    (!auth.loading)
                                        ? "Iniciar Sesión"
                                        : <div className="loader" />

                                }
                            </button>

                            <span className="text-xs d-in-block mb-1">Aun no tienes una cuenta?</span>

                            <Link
                                to={routes.register}
                                className="btn btn-animation btn-secondary w-100 text-xs text-none">
                                Crear Cuenta
                            </Link>
                        </div>
                    </Form>

                </Formik>
            </div>

        </div>
    )
}

const data = (state) => ({
    auth: state.authReducer
});
const actions = { authHandleLogin };
export default connect(data, actions)(LoginView);