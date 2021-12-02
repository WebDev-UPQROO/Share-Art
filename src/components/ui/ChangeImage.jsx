import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getPhoto } from '../../helpers/getPhoto';
import { authHandleChangePhoto } from '../../store/auth/authActions';

const ChangeImage = ({ auth, authHandleChangePhoto }) => {
    const [profileImage, setprofileImage] = useState({});
    const [newPhoto, setNewPhoto] = useState(false);

    useEffect(() => {
        setprofileImage({
            file: null,
            url: auth?.user?.photo?.url
        });
    }, []);

    const imagesHandle = (e) => {
        if (e.currentTarget?.files[0]) {
            const image = e.currentTarget.files[0];
            setNewPhoto(true);

            setprofileImage({
                file: image,
                url: URL.createObjectURL(image)
            });
        }

    }

    const imagesDeleteHandle = (e) => {
        e.preventDefault();
        setNewPhoto(true);
        setprofileImage({
            file: null,
            url: null
        });


    }

    const imagesRollbackHandle = (e) => {
        setNewPhoto(false);
        setprofileImage({
            file: null,
            url: auth?.user?.photo?.url
        });
    }

    const changePhoto = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("id", auth?.user?._id)

        if (profileImage?.file !== null)
            formData.append("images", profileImage?.file)

        authHandleChangePhoto(formData, setNewPhoto)
    }
    return (
        <form onSubmit={changePhoto} className="edit-profile__photo">
            <picture className="profile-image lg">
                <img src={getPhoto(profileImage?.url)} alt="default" />
            </picture>

            <label htmlFor="image" className="edit-profile__photo--edit"
                style={{ display: (!newPhoto) ? 'block' : 'none' }}>
                <span>Modificar</span>
                <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={imagesHandle}
                />
            </label>

            <input
                type="reset"
                style={{ display: (!newPhoto) ? 'block' : 'none' }}
                className="edit-profile__photo--delete mr-3"
                onClick={imagesDeleteHandle} value="Eliminar"
            />

            <input
                type="submit"
                className="edit-profile__photo--edit"
                style={{ display: (newPhoto) ? 'block' : 'none' }}
                value="Guardar Cambios"
                disabled={auth.loading}
            />

            <input
                type="reset"
                style={{ display: (newPhoto) ? 'block' : 'none' }}
                className="edit-profile__photo--delete"
                onClick={imagesRollbackHandle}
                value="Deshacer"
                disabled={auth.loading}

            />
        </form>
    )
}

export default connect(null, { authHandleChangePhoto })(ChangeImage);