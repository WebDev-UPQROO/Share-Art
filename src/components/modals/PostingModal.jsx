import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import * as Yup from 'yup';
import { ErrorForm } from "../ui/notifications/ErrorForm";
import { PostPreview } from "./PostPreview";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { profilePostsHandleCreate, profilePostsHandleEdit } from "../../store/posts/postsActions";

const PostingModal = ({
    auth: { user },
    visible,
    toggle,
    post = null,
    editable = null,
    profilePostsHandleCreate,
    profilePostsHandleEdit
}) => {

    let formInitialValues;
    const [images, setImages] = useState([]);
    const [loadedImages, setLoadedImages] = useState([]);
    const formikRef = useRef();

    formInitialValues = {
        id: user?._id ?? null,
        title: editable?.title ?? '',
        description: editable?.post ?? '',
        idPost: post?._id ?? null,
        categories: editable?.categories?.map(item => item?._id) ?? [],

        images: [],
        deleteImages: [],
    }

    const categories = [
        { id: "photo", title: "Fotografía", value: "6169b476fc358e71ee6f30e0", icon: "camera" },
        { id: "music", title: "Música", value: "6169b476fc358e71ee6f30e1", icon: "music" },
        { id: "paint", title: "Pintura", value: "6169b476fc358e71ee6f30e2", icon: "palette" },
        { id: "sculpture", title: "Escultura", value: "6169b476fc358e71ee6f30e3", icon: "paint-brush" }
    ];

    useEffect(() => {
        if (editable?.images) setLoadedImages(editable?.images);
        setImages([]);
    }, [visible])// eslint-disable-line react-hooks/exhaustive-deps


    const imagesHandle = (e) => {
        const files = Array.from(e.currentTarget.files);
        formikRef.current.setFieldValue("images", files);

        setImages([]);

        if (files.length > 0) {
            files.forEach(image => {
                setImages((img) => [
                    ...img,
                    {
                        name: image.name,
                        url: URL.createObjectURL(image)
                    }
                ])
            }
            )
        }


    }

    const deleteImageHandle = (e) => {
        setImages(img => img.filter((img) => img.name !== e.target.id));

        const imagesFilesFiltered = formikRef.current.values.images.filter(
            (img) => img.name !== e.target.id);
        formikRef.current.setFieldValue("images", imagesFilesFiltered);

    }

    const deleteLoadedImageHandle = (e) => {
        setLoadedImages(img => img.filter((img) => img.id !== e.target.id));
        formikRef.current.setFieldValue("deleteImages", [
            ...formikRef.current.values.deleteImages,
            e.target.id
        ]);
    }

    const postHandlePosting = async (values) => {
        const formData = new FormData();

        formData.append("id", editable?._id ? editable?._id : values?.id);
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("idPost", values.idPost);

        values.images.forEach(value => formData.append("images", value))
        values.deleteImages.forEach(value => formData.append("deleteImages", value))
        values.categories.forEach(value => formData.append("categories", value))

        try {
            if (!editable?._id) {
                profilePostsHandleCreate(formData);
            } else {
                profilePostsHandleEdit(formData)
            }
            toggle();
        } catch (e) {
            toast.error("Ha ocurrido un error, intentalo mas tarde");

        }
    };

    return (
        visible ? ReactDOM.createPortal(
            <div className="modal">
                <div className="modal-dialog md">
                    <button className="close btn btn-link-secondary" onClick={toggle}>
                        <span>&times;</span>
                    </button>

                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Compartir</h3>
                        </div>
                        <Formik
                            innerRef={formikRef}
                            initialValues={formInitialValues}

                            validationSchema={Yup.object({
                                title: (!post) && Yup.string()
                                    .required('Ingresa un titulo para tu publicación'),
                                images: Yup.array().max(5, "Puedes subir maximo 5 fotos")
                            })}

                            onSubmit={postHandlePosting}
                        >
                            {<Form className="modal-body">
                                <div className="form-item full">
                                    <label htmlFor="title">Titulo*</label>
                                    <Field
                                        id="title"
                                        name="title"
                                        type="text"
                                        className="input"
                                    />
                                    <ErrorMessage name="title">
                                        {msg => <ErrorForm>{msg}</ErrorForm>}
                                    </ErrorMessage>
                                </div>

                                <div className="form-item full">
                                    <label htmlFor="description">Publicación</label>
                                    <Field
                                        id="description"
                                        name="description"
                                        as="textarea"
                                        className="input"
                                    />
                                </div>

                                {(!post && !editable?.postOrigin) && <>
                                    <div className="posting__form--media">
                                        <label htmlFor="files">
                                            <span>Subir Images</span>
                                            <i className="fas fa-images" />
                                            <Field
                                                id="files"
                                                name="files"
                                                type="file"
                                                accept="image/*"
                                                multiple
                                                onChange={imagesHandle}
                                            />
                                        </label>
                                        <ErrorMessage name="images">
                                            {msg => <ErrorForm>{msg}</ErrorForm>}
                                        </ErrorMessage>


                                        {(loadedImages.length > 0) && (
                                            <div className="posting__form--media--images">
                                                {loadedImages.map((image, i) =>
                                                    <picture
                                                        key={i}
                                                        id={image.id}
                                                        className="preview-img"
                                                        onClick={deleteLoadedImageHandle}
                                                    >
                                                        <img
                                                            key={i}
                                                            src={image.url}
                                                            id={image.id}
                                                            className="w-100"
                                                            alt="preview"
                                                        />
                                                    </picture>)}
                                            </div>)}

                                        {(images.length > 0) && (
                                            <div className="posting__form--media--images">
                                                {images.map((image, i) =>
                                                    <picture
                                                        key={i}
                                                        id={image.name}
                                                        className="preview-img"
                                                        onClick={deleteImageHandle}
                                                    >
                                                        <img
                                                            key={i}
                                                            src={image.url}
                                                            id={image.name}
                                                            className="w-100"
                                                            alt="preview"
                                                        />
                                                        <br />
                                                    </picture>)}
                                            </div>)}
                                    </div>

                                    <label htmlFor="like">Intereses</label>

                                    <div className="posting__form--interests">
                                        {categories.map(({ id, title, value, icon }) => (
                                            <div className="check" key={id}>
                                                <Field
                                                    type="checkbox"
                                                    id={id}
                                                    name="categories"
                                                    value={value}
                                                />
                                                <label htmlFor={id}>
                                                    <i className={`fas fa-${icon} mr-1`} />
                                                    {title}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </>}

                                {(post || editable?.postOrigin) && <PostPreview post={post || editable?.postOrigin} />}

                                <div className="posting__form--buttons mt-2">
                                    <button onClick={toggle} className="cancel">
                                        Cancelar
                                    </button>

                                    <button type="submit" className="submit">
                                        Compartir
                                    </button>

                                </div>
                            </Form>}
                        </Formik>
                    </div>
                </div>
            </div >
            , document.querySelector('body')) : null)
};

const data = (state) => ({
    auth: state.authReducer,

});
const actions = {
    profilePostsHandleCreate,
    profilePostsHandleEdit
};
export default connect(data, actions)(PostingModal);

