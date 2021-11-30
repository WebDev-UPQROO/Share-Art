import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getCover, getPhoto } from '../../helpers/getPhoto';
import { authHandleChangeCover } from '../../store/auth/authActions';

const ChangeCover = ({ auth, authHandleChangeCover }) => {
    const [coverImage, setCoverImage] = useState({});
    const [newPhoto, setNewPhoto] = useState(false);

    useEffect(() => {
        setCoverImage({
            file: null,
            url: auth?.user?.cover?.url
        });
    }, []);

    const imagesHandle = (e) => {
        if (e.currentTarget?.files[0]) {
            const image = e.currentTarget.files[0];
            setNewPhoto(true);

            setCoverImage({
                file: image,
                url: URL.createObjectURL(image)
            });
        }

    }

    const imagesDeleteHandle = (e) => {
        e.preventDefault();
        setNewPhoto(true);
        setCoverImage({
            file: null,
            url: null
        });


    }

    const imagesRollbackHandle = (e) => {
        setNewPhoto(false);
        setCoverImage({
            file: null,
            url: auth?.user?.cover?.url
        });
    }

    const changePhoto = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("id", auth?.user?._id)

        if (coverImage?.file !== null)
            formData.append("images", coverImage?.file)

        authHandleChangeCover(formData, setNewPhoto)
    }
    return (
        <form onSubmit={changePhoto} className="edit-profile__photo cover">
            <div className="edit-profile-cover">
                <img src={getCover(coverImage?.url)} alt="default" />
            </div>
            <div className="edit-profile__photo--buttons">
                <label htmlFor="cover" className="edit-profile__photo--edit"
                    style={{ display: (!newPhoto) ? 'block' : 'none' }}>
                    <span>Modificar</span>
                    <input
                        id="cover"
                        name="cover"
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
            </div>


        </form>
    )
}

export default connect(null, { authHandleChangeCover })(ChangeCover);