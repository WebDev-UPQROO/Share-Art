import React, { useState } from 'react'
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';
import { getDate } from '../../helpers/getDate';
import { getPhoto } from '../../helpers/getPhoto';
import { routes } from '../../routes/routes';
import { CommentsGroup } from './comments/CommentsGroup';

export const Post = ({ uid, post, group = false }) => {
    const reactions = {
        like: 1,
        dislike: 0,
    }
    const userReaction = post?.votes?.find(user => user[0] === uid);
    const userLike = userReaction && userReaction[1] === reactions.like;
    const userDislike = userReaction && userReaction[1] === reactions.dislike;

    const [comments, setComments] = useState(false);
    const [isExpand, setExpand] = useState(false);

    return (
        <div className="mb-2">
            <div className="post">
                <div className="post__heading">
                    <picture className="profile-image">
                        <img src={getPhoto(post?.user?.photo)} alt="default" />
                    </picture>
                    <div className="ml-1">
                        <Link
                            to={routes.profile + post?.user?._id}
                            className="post__heading--user"
                        >
                            {post?.user?.username}
                        </Link>
                        <p>
                            <small>{getDate(post?.date)} </small>
                            <small className="post__heading--details">
                                &#8226; Arte Abstracto
                            </small>
                        </p>
                    </div>


                    <div className="post__options">
                        {
                            (post?.group && group === false) &&
                            (
                                <Link to={routes.home} className="btn-animation btn-link">
                                    <span className="mr-1">Ir al grupo</span>
                                </Link>
                            )
                        }
                        {
                            (uid === post?.user?._id) &&
                            (
                                <div className="post__options__menu ml-1">

                                    <div className="dropdown">
                                        <button
                                            className="dropdown-btn btn btn-link-secondary btn-animation"
                                        >
                                            <i className="fas fa-ellipsis-v" />
                                        </button>
                                        <div className="menu-dropdown">
                                            <button className="item btn btn-secondary" >
                                                Editar
                                            </button>
                                            <button className="item btn btn-secondary" >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

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
                        (post?.photo) &&
                        (<div className="post__images">
                            <img src={post?.photo} alt="pub" />
                        </div>)
                    }
                </div>

                <div className="post__share mt-2">

                    <button
                        className="post__share__side btn btn-secondary btn-animation mr-1"
                        onClick={() => setComments(!comments)}
                    >
                        <i className="fas fa-comment-alt btn-icon-left" />
                        <span>Comentarios</span>
                    </button>

                    <input
                        id={"like" + post?._id}
                        type="radio"
                        name="votes"
                        defaultChecked={userLike}
                        value={reactions.like}
                        className="d-none"
                    />
                    <label
                        htmlFor={"like" + post?._id}
                        className={"btn btn-secondary btn-animation " + (userLike && "active")}
                    >
                        <i className="fas fa-chevron-up" />
                    </label>

                    <p className="ml-1 mr-1 text-sm"> {post?.votes?.length ?? 0} Votos</p>

                    <input
                        id={"dislike" + post?._id}
                        type="radio" name="votes"
                        defaultChecked={userDislike}
                        value={reactions.dislike}
                        className="d-none"
                    />
                    <label
                        htmlFor={"dislike" + post?._id}
                        className={"btn btn-secondary btn-animation " + (userDislike && "active")}
                    >
                        <i className="fas fa-chevron-up" />
                    </label>

                    <button
                        disabled={uid === post?.user?._id}
                        title={(uid === post?.user?._id ? "Ya has compartido esta publicación" : null)}
                        className={"post__share__side btn btn-secondary ml-1 "
                            + (uid !== post?.user?._id && "btn-animation")}
                    >
                        <i className="fas fa-share-alt btn-icon-left" />
                        <span>Compartir</span>
                    </button>
                </div>
                <CommentsGroup active={comments} />
            </div >
        </div>

    )
}
