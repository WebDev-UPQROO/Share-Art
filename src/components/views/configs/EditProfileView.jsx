import { Field, Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { routes } from '../../../routes/routes'
import ChangeCover from '../../ui/ChangeCover'
import ChangeImage from '../../ui/ChangeImage'
import { authHandleChangeProfileInfo } from '../../../store/auth/authActions'
import { getDateInput } from '../../../helpers/getDate'


const EditProfileView = ({ auth, authHandleChangeProfileInfo }) => {
    const interests = [
        { id: "photo", title: "Fotografía", value: "6169b476fc358e71ee6f30e0", icon: "camera" },
        { id: "music", title: "Música", value: "6169b476fc358e71ee6f30e1", icon: "music" },
        { id: "paint", title: "Pintura", value: "6169b476fc358e71ee6f30e2", icon: "palette" },
        { id: "sculpture", title: "Escultura", value: "6169b476fc358e71ee6f30e3", icon: "paint-brush" }
    ];

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
            <h1 className="mb-5 mt-2">Mi Perfil</h1>

            <div className="edit-profile">
                <span className="edit-profile-title">Foto de perfil</span>
                <ChangeImage auth={auth} />
                <span className="edit-profile-title">Portada</span>
                <ChangeCover auth={auth} />

                <Formik
                    initialValues={{
                        id: auth?.user?._id,
                        bio: auth?.user?.bio || "",
                        birthday: getDateInput(auth?.user?.birthday) || "",
                        categories: auth?.user?.categories || [],
                    }}
                    onSubmit={authHandleChangeProfileInfo}
                >
                    <Form className="edit-profile__form mt-4">
                        <label htmlFor="bio">Biografía</label>
                        <Field
                            as="textarea"
                            id="bio"
                            name="bio"
                            rows="8"
                            className="input"
                        />

                        <label htmlFor="birthday">Cumpleaños</label>
                        <Field
                            id="birthday"
                            name="birthday"
                            type="date"
                            className="input"
                        />

                        <label htmlFor="like">Intereses</label>

                        <div className="edit-profile__form--interests">

                            {interests.map(({ id, title, value, icon }) => (
                                <div className="check" key={id}>
                                    <Field
                                        type="checkbox"
                                        id={id}
                                        name="categories"
                                        value={value}
                                        className="input"
                                    />
                                    <label htmlFor={id}>
                                        <i className={`fas fa-${icon} mr-1`} />
                                        {title}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <div className="edit-profile__form--buttons mt-2 mb-5">
                            <input
                                type="reset"
                                className="cancel"
                                value="Deshacer"
                                disabled={auth.loading}
                            />
                            <Field
                                type="submit"
                                className="submit"
                                value="Guardar cambios"
                                disabled={auth.loading}
                            />
                        </div>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}

const data = (state) => ({
    auth: state.authReducer
})
export default connect(data, { authHandleChangeProfileInfo })(EditProfileView)