import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import * as Yup from 'yup';
import { ErrorForm } from "../ui/notifications/ErrorForm";
import { PostPreview } from "./PostPreview";

const PostingModal = ({ visible, toggle, post = null, editable = null }) => {
    let formInitialValues;
    const [images, setImages] = useState([]);
    const [loadedImages, setLoadedImages] = useState([]);
    const formikRef = useRef();

    formInitialValues = {
        id: editable?._id ?? null,
        title: editable?.title ?? '',
        description: editable?.post ?? '',
        post: post?._id ?? null,
        interests: editable?.interests ?? [],

        images: [],
        deleteImages: [],
    }

    const interests = [
        { id: "photo", title: "Fotografía", value: "6169b476fc358e71ee6f30e0", icon: "camera" },
        { id: "music", title: "Música", value: "6169b476fc358e71ee6f30e1", icon: "music" },
        { id: "paint", title: "Pintura", value: "6169b476fc358e71ee6f30e2", icon: "palette" },
        { id: "sculpture", title: "Escultura", value: "6169b476fc358e71ee6f30e3", icon: "paint-brush" }
    ];

    useEffect(() => {
        if (editable?.images) setLoadedImages(editable?.images);
        setImages([]);
    }, [visible])


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

                            onSubmit={(values) => {
                                console.log(values);
                            }}
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

                                {(!post) && <>
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
                                        {interests.map(({ id, title, value, icon }) => (
                                            <div className="check" key={id}>
                                                <Field
                                                    type="checkbox"
                                                    id={id}
                                                    name="interests"
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

                                {(post) && <PostPreview post={post} />}

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

export default PostingModal;