import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { ErrorForm } from '../ui/notifications/ErrorForm';
import { toast } from 'react-toastify';
import API from '../../services/constants';
import axios from 'axios';

export const RegisterView = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false)

    const authHandleRegister = async (values) => {
        setLoading(true);
        try {
            await axios.post(API.base + API.register, values);
            toast.success("Usuario creado exitosamente, ya puedes iniciar sesión");
            history.replace(routes.login);
        } catch (e) {
            toast.error("Ha ocurrido un error, intentalo mas tarde");
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="login">

                <div className="login__container">
                    <div>
                        <div>
                            <h3>Unete a ShareArt hoy mismo</h3>
                            <span>Crear una nueva cuenta</span>
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            name: '',
                            username: '',
                            email: '',
                            password: '',
                        }}

                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required('Ingresa tu nombre')
                                .matches(/^[\w\sñ]+$/, "No se aceptan caracteres especiales"),
                            username: Yup.string()
                                .required('Ingresa tu nombre de usuario')
                                .min(5, 'Debe ser mínimo de 5 caracteres')
                                .matches(/^[\wñ]+$/, "No se aceptan caracteres especiales"),
                            password: Yup.string()
                                .min(8, 'Debe ser mínimo de 8 caracteres')
                                .required('Agrega una contraseña'),
                            email: Yup.string().email('Correo electronico invalido').required('Ingresa tu correo electrónico'),
                        })}

                        onSubmit={authHandleRegister}
                    >
                        <Form className="mt-3">
                            <div className="form-item full">
                                <label htmlFor="name">Nombre Completo</label>
                                <Field
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Nombre Completo"
                                    className="form-input input"
                                />
                                <ErrorMessage name="name">
                                    {msg => <ErrorForm>{msg}</ErrorForm>}
                                </ErrorMessage>
                            </div>

                            <div className="form-item full">
                                <label htmlFor="username">Nombre de Usuario</label>
                                <Field
                                    id="username"
                                    name="username"
                                    type="text"
                                    placeholder="Nombre de Usuario"
                                    className="form-input input"
                                />
                                <ErrorMessage name="username">
                                    {msg => <ErrorForm>{msg}</ErrorForm>}
                                </ErrorMessage>
                            </div>

                            <div className="form-item full">
                                <label htmlFor="email">Correo Electrónico</label>
                                <Field
                                    name="email"
                                    id="email"
                                    placeholder="Correo Electrónico"
                                    className="form-input input"
                                />
                                <ErrorMessage name="email">
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

                            <div>
                                <button type="submit" className="btn btn-animation btn-primary w-100 mb-3 text-xs text-none" disabled={loading}>
                                    {
                                        (!loading)
                                            ? "Crear cuenta"
                                            : <div className="loader" />

                                    }
                                </button>

                                <span className="text-xs d-in-block mb-1">Ya tienes una cuenta?</span>
                                <Link
                                    to={routes.login}
                                    className="btn btn-animation btn-secondary w-100 text-xs text-none">
                                    Iniciar Sesión
                                </Link>
                            </div>
                        </Form>
                    </Formik>
                </div>

            </div>
        </div >
    )
}