import React, { useState } from "react";
import ReactDOM from "react-dom";

const PostingModal = ({ visible, toggle }) => {
    const [images, setImages] = useState([])

    const imagesHandle = (evt) => {
        const imagesFile = evt.target.files;
        setImages([]);
        if (imagesFile.length > 0) {
            for (let i = 0; i < imagesFile.length; i++) {
                const url = URL.createObjectURL(imagesFile[i])
                setImages((img) => [...img, url]);
            }
        }

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
                            <h3>Publicar</h3>
                        </div>
                        <div className="modal-body">
                            <div className="form-item full">
                                <label htmlFor="email">Titulo</label>
                                <input
                                    id="email"
                                    type="text"
                                    className="input"
                                />
                            </div>

                            <div className="form-item full">
                                <label htmlFor="password">Publicación</label>
                                <textarea
                                    id="password"
                                    className="input"
                                />
                            </div>

                            <div className="posting__form--media">
                                <label htmlFor="images">
                                    <span>Subir Images</span>
                                    <i className="fas fa-images" />
                                    <input type="file" id="images" accept="image/*" multiple onChange={imagesHandle} />
                                </label>

                                {
                                    (images.length > 0) && (
                                        <div className="posting__form--media--images">
                                            {images.map((image, i) =>
                                                <picture className="preview-img" key={i}>
                                                    <img key={i} src={image} className="w-100" />
                                                    <br />
                                                </picture>)}
                                        </div>)
                                }


                            </div>

                            <label htmlFor="like">Intereses</label>

                            <div className="posting__form--interests">
                                <div className="check">
                                    <input type="checkbox" id="photo" name="photo" />
                                    <label htmlFor="photo">
                                        <i className={`fas fa-camera mr-1`} />
                                        Fotografia
                                    </label>
                                </div>

                                <div className="check">
                                    <input type="checkbox" id="music" name="music" />
                                    <label htmlFor="music">
                                        <i className={`fas fa-music mr-1`} />
                                        Música
                                    </label>
                                </div>

                                <div className="check">
                                    <input type="checkbox" id="paint" name="paint" />
                                    <label htmlFor="paint">
                                        <i className={`fas fa-palette mr-1`} />
                                        Pintura
                                    </label>
                                </div>

                                <div className="check">
                                    <input type="checkbox" id="sculpture" name="sculpture" />
                                    <label htmlFor="sculpture">
                                        <i className={`fas fa-paint-brush mr-1`} />
                                        Escultura
                                    </label>
                                </div>
                            </div>

                            <div className="posting__form--buttons mt-2">
                                <button onClick={toggle} className="cancel">
                                    Cancelar
                                </button>

                                <button className="submit">
                                    Publicar
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            , document.querySelector('body')) : null)
};

export default PostingModal;