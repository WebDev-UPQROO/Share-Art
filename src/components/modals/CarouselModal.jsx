import React from 'react'
import ReactDOM from "react-dom";
import useCarousel from '../../hooks/useCarousel';


export const CarouselModal = ({ visible, toggle, images }) => {
    const [actualImage, nextImage] = useCarousel(images);

    return (
        visible ? ReactDOM.createPortal(
            <div className="modal carousel-modal">
                <button className="btn btn-primary mb-3" onClick={toggle}>
                    <span>&times;</span>
                </button>
                <span>{actualImage.index + 1}/{images.length}</span>
                <div className="modal-body">
                    <img src={actualImage?.url} onClick={nextImage} alt="pub" />
                </div>
            </div>
            , document.querySelector('body')) : null)
}
