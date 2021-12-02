import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { routes } from '../../../routes/routes'
import * as Yup from 'yup';
import { authHandleChangePersonalInfo } from '../../../store/auth/authActions'
import { ErrorForm } from '../../ui/notifications/ErrorForm'

const EditPersonalView = ({ auth, authHandleChangePersonalInfo }) => {
    return (
        <div className="main-full">
            <Link to={routes.configs} className="btn-animation btn-link">
                <i className="fas fa-arrow-left" />
                <span className="ml-2">Regresar</span>
            </Link>
            <h1 className="mb-5 mt-2">Datos Personales</h1>

            <Formik
                initialValues={{
                    id: auth?.user?._id,
                    name: auth?.user?.name || "",
                    username: auth?.user?.username || "",
                    email: auth?.user?.email || [],
                }}
                validationSchema={Yup.object({
                    id: Yup.string().required('Error, por favor, reinicia tu sesión'),
                    name: Yup.string().required('Ingresa tu nombre'),
                    username: Yup.string().required('Ingresa tu nombre de usuario'),
                    email: Yup.string().required('Ingresa tu correo electrónico'),
                })}
                onSubmit={authHandleChangePersonalInfo}
            >
                <Form className="edit-personal__form">
                    <ErrorMessage name="id">
                        {msg => <ErrorForm>{msg}</ErrorForm>}
                    </ErrorMessage>
                    <label htmlFor="name">Nombre Completo</label>
                    <Field
                        id="name"
                        name="name"
                        type="text"
                    />
                    <ErrorMessage name="name">
                        {msg => <ErrorForm>{msg}</ErrorForm>}
                    </ErrorMessage>
                    <div className="mb-3" />

                    <label htmlFor="username">Nombre de Usuario</label>
                    <div className="form-input username-input mt-1">
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
                    <div className="mb-3" />

                    <label htmlFor="email">Correo Electrónico</label>
                    <Field
                        id="email"
                        name="email"
                        type="email"
                    />
                    <ErrorMessage name="email">
                        {msg => <ErrorForm>{msg}</ErrorForm>}
                    </ErrorMessage>
                    <div className="mb-3" />

                    <div className="edit-profile__form--buttons mt-2 mb-5">
                        <Link to={routes.configs} className="cancel">
                            Deshacer
                        </Link>

                        <button type="submit" className="submit">
                            Guardar cambios
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
export default connect(data, { authHandleChangePersonalInfo })(EditPersonalView)
