import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { routes } from '../../../routes/routes'
import { authHandleChangePassword } from '../../../store/auth/authActions'
import * as Yup from 'yup';
import { ErrorForm } from '../../ui/notifications/ErrorForm'
import { toast } from 'react-toastify'


const EditPassword = ({ auth, authHandleChangePassword }) => {
    const formik = useRef();

    useEffect(() => {
        if (auth.error !== null)
            toast.error(auth.error);
    }, [auth.error]);

    return (
        <div className="main-full">
            <Link to={routes.configs} className="btn-animation btn-link">
                <i className="fas fa-arrow-left" />
                <span className="ml-2">Regresar</span>
            </Link>
            <h1 className="mb-5 mt-2">Cambiar contraseña</h1>

            <Formik
                innerRef={formik}
                initialValues={{
                    id: auth?.user?._id,
                    c_password: "",
                    password: "",
                    n_password: "",
                }}
                validationSchema={Yup.object({
                    id: Yup.string().required('Error, por favor, reinicia tu sesión'),
                    c_password: Yup.string().required('Ingresa tu contraseña actual'),
                    password: Yup.string().required('Ingresa una nueva contraseña'),
                    n_password: Yup.string().required('Confirma tu nueva contraseña').when("password", {
                        is: val => (val && val.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Tu nueva contraseña no coincide"
                        )
                    })
                })}
                onSubmit={(values,) => authHandleChangePassword(values, formik.current.resetForm)}
            >
                <Form className="edit-personal__form">

                    <ErrorMessage name="id">
                        {msg => <ErrorForm>{msg}</ErrorForm>}
                    </ErrorMessage>

                    <label htmlFor="c_password">Contraseña</label>
                    <Field
                        type="password"
                        name="c_password"
                        id="c_password"
                    />
                    <ErrorMessage name="c_password">
                        {msg => <ErrorForm>{msg}</ErrorForm>}
                    </ErrorMessage>
                    <div className="mb-3" />

                    <label htmlFor="password">Nueva contraseña</label>
                    <Field
                        type="password"
                        name="password"
                        id="password"
                    />
                    <ErrorMessage name="password">
                        {msg => <ErrorForm>{msg}</ErrorForm>}
                    </ErrorMessage>
                    <div className="mb-3" />

                    <label htmlFor="n_password">Confirmar nueva contraseña</label>
                    <Field
                        type="password"
                        name="n_password"
                        id="n_password"
                    />
                    <ErrorMessage name="n_password">
                        {msg => <ErrorForm>{msg}</ErrorForm>}
                    </ErrorMessage>
                    <div className="mb-3" />

                    <div className="edit-profile__form--buttons mt-2 mb-5">
                        <Link
                            to={routes.configs}
                            className="cancel"
                        >
                            Cancelar
                        </Link>

                        <button
                            type="submit"
                            className="submit"
                            disabled={auth.loading}
                        >
                            Actualizar contraseña
                        </button>

                    </div>

                </Form>
            </Formik>


        </div>
    )
}

const data = (state) => ({
    auth: state.authReducer
})
export default connect(data, { authHandleChangePassword })(EditPassword)