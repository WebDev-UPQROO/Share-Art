import React, { useState } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import { Link } from 'react-router-dom';
import { getDate } from '../../helpers/getDate';
import { getPhoto } from '../../helpers/getPhoto';
import useModal from '../../hooks/useModal';
import { routes } from '../../routes/routes';
import { CarouselModal } from './CarouselModal';

export const PostPreview = ({ post }) => {
    const [isExpand, setExpand] = useState(false);
    const { toggle: toggleCarousel, visible: visibleCarousel } = useModal(false);


    return (
        <div className="post preview">
            <div className="post__heading">
                <picture className="profile-image">
                    <img src={getPhoto(post?.user?.photo?.url)} alt="default" />
                </picture>
                <div className="ml-1">
                    <Link to={routes.profile + post?.user?._id} className="post__heading--user"  >
                        @{post?.user?.username}
                    </Link>
                    <p>
                        <small>{getDate(post?.date)} </small>
                        <small className="post__heading--details">
                            {
                                post?.categories.map(category =>
                                    <>
                                        <span>&#8226; {category?.name} </span>
                                    </>
                                )
                            }
                        </small>
                    </p>
                </div>
            </div>

            <div className="post__content mt-1">
                <span>{post?.title}</span>
                <div className="mb-1">
                    {isExpand ? (
                        <div className="">
                            <div>{post?.post}</div>
                            <p className="btn-link  mt-1" onClick={() => setExpand(!isExpand)}>...Ver  menos</p>
                        </div>

                    ) : (
                        <div onClick={() => setExpand(!isExpand)}>
                            <LinesEllipsis text={post?.post} maxLine="2" ellipsis="...ver más" />
                        </div>
                    )}
                </div>
                {
                    (post?.images?.length > 0) &&
                    (<div className="post__images" onClick={toggleCarousel}>
                        <img src={post?.images[0].url} alt="pub" />
                        <span className="carousel-hover">
                            Ver más {post?.images.length > 1 && ` +${post?.images.length - 1}`}...
                        </span>
                    </div>)
                }
            </div>
            <CarouselModal
                toggle={toggleCarousel}
                visible={visibleCarousel}
                images={post?.images}
            />
        </div >
    )
}
