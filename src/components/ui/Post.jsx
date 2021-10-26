import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { CommentsGroup } from './comments/CommentsGroup';

export const Post = () => {

    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            isMounted.current &&
                setLoading(false)
        }, 3000);
    }, [])

    const isMounted = useRef(true);
    useEffect(() => {
        return () => isMounted.current = false;
    }, [])


    return (
        <div className="mb-2">
            <div className="post">
                {
                    (!loading)
                        ? (
                            <>
                                <div className="post__heading">
                                    <picture className="profile-image">
                                        <img src='/assets/temp/user.jfif' alt="default" />
                                    </picture>
                                    <div className="ml-1">
                                        <p>@eeqeqw</p>
                                        <p>
                                            <small>1m </small>
                                            <small className="post__heading--details">
                                                &#8226; Arte Abstracto | Pintura
                                            </small>
                                        </p>
                                    </div>
                                    <Link to="/profile" className="post__link btn-animation btn-link">
                                        <span className="mr-1">Ir al grupo</span>
                                        <i className="fas fa-arrow-right" />
                                    </Link>
                                </div>

                                <div className="post__content mt-1">
                                    <p className="mb-1">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    </p>
                                    <div className="post__images">
                                        <img src="/assets/temp/image.jfif" alt="default" />
                                    </div>
                                </div>

                                <div className="post__share mt-1">

                                    <button
                                        className="btn btn-secondary btn-animation mr-1"
                                        onClick={() => setComments(!comments)}
                                    >
                                        <i className="fas fa-comment-alt btn-icon-left" />
                                        <span>Comentarios</span>
                                    </button>

                                    <button className="btn btn-secondary btn-animation">
                                        <i className="fas fa-chevron-up" />
                                    </button>

                                    <span className="ml-1 mr-1 text-sm"> 100 Votos</span>

                                    <button className="btn btn-secondary btn-animation mr-1">
                                        <i className="fas fa-chevron-down" />
                                    </button>

                                    <button className="btn btn-secondary btn-animation mr-1">
                                        <i className="fas fa-share-alt btn-icon-left" />
                                        <span>Compartir</span>
                                    </button>


                                </div>
                            </>
                        )
                        :
                        (
                            <>
                                <div className="d-flex mb-1">
                                    <div className="loading profile-image mr-1"></div>
                                    <div className="d-in-block">
                                        <div className="loading mb-1" style={{ width: '12rem', height: '1rem' }}></div>
                                        <div className="post__link loading mb-1" style={{ width: '6rem', height: '1rem' }}></div>
                                    </div>
                                </div>


                                <div className="loading mb-1" style={{ width: '100%', height: '10rem' }}></div>
                                <div className="loading mb-1" style={{ width: '100%', height: '2rem' }}></div>
                            </>
                        )
                }

                <CommentsGroup active={comments} />
            </div >
        </div>

    )
}
