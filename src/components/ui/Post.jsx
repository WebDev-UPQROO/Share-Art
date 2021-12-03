import React, { useEffect, useState } from 'react'
import LinesEllipsis from 'react-lines-ellipsis';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDate } from '../../helpers/getDate';
import { getPhoto } from '../../helpers/getPhoto';
import useModal from '../../hooks/useModal';
import { routes } from '../../routes/routes';
import { postsHandleVote, profilePostsHandleDelete } from '../../store/posts/postsActions';
import { CarouselModal } from '../modals/CarouselModal';
import PostingModal from '../modals/PostingModal';
import { PostPreview } from '../modals/PostPreview';
import { CommentsGroup } from './comments/CommentsGroup';

const Post = ({ uid, post, group = false, profilePostsHandleDelete, postsHandleVote }) => {
    const reactions = {
        like: 1,
        dislike: -1,
    }
    const { toggle: toggleShare, visible: visibleShare } = useModal(false);
    const { toggle: toggleEdit, visible: visibleEdit } = useModal(false);
    const { toggle: toggleCarousel, visible: visibleCarousel } = useModal(false);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(0);
        post?.votes?.forEach(vote => {
            setTotal(t => t + vote.action)
        })
    }, [post])

    const [comments, setComments] = useState(false);
    const [isExpand, setExpand] = useState(false);

    console.log(post);
    const vote = (e) => {
        postsHandleVote(uid, e.target.value, post?._id);
    };

    return (
        <div className="mb-2">
            <div className="post">
                <div className="post__heading">
                    <picture className="profile-image">
                        <img src={getPhoto(post?.user?.photo?.url)} alt="default" />
                    </picture>
                    <div className="ml-1">
                        <Link
                            to={routes.profile + post?.user?._id}
                            className="post__heading--user"
                        >
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
                                            <button className="item btn btn-secondary" onClick={toggleEdit} >
                                                Editar
                                            </button>
                                            <button className="item btn btn-secondary" onClick={() => profilePostsHandleDelete(uid, post?._id)}>
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
                    {(post?.post.trim() !== "") &&
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
                    }
                    {
                        (post?.images?.length > 0) &&
                        (<div className="post__images" onClick={toggleCarousel}>
                            <img src={post?.images[0].url} alt="pub" />
                            <span className="carousel-hover">
                                Ver más {post?.images.length > 1 && ` +${post?.images.length - 1}`}...
                            </span>
                        </div>)
                    }
                    {
                        (post?.postOrigin) &&
                        (<PostPreview post={post?.postOrigin} />)
                    }
                </div>

                <div className="post__share mt-2">

                    <button
                        className="post__share__side btn btn-secondary btn-animation mr-1"
                        onClick={() => setComments(!comments)}
                        disabled={true}
                    >
                        <i className="fas fa-comment-alt btn-icon-left" />
                        <span className="text-action-post">Comentarios</span>
                        <span>
                            {post?.comments?.length > 0 && `(${post?.comments?.length})`}
                        </span>
                    </button>

                    <input
                        id={"like" + post?._id}
                        type="radio"
                        name="votes"
                        value={reactions.like}
                        className="d-none"
                        onChange={vote}
                    />
                    <label
                        htmlFor={"like" + post?._id}
                        className={"btn btn-secondary btn-animation " + ((post?.votes?.find(user => user.idUser === uid)?.action === 1) && "active")}
                    >
                        <i className="fas fa-chevron-up" />
                    </label>

                    <label className="ml-1 mr-1 text-sm cursor-pointer" htmlFor={"neutral" + post?._id}> {total} Votos</label>
                    <input
                        id={"neutral" + post?._id}
                        type="radio"
                        name="votes"
                        className="d-none"
                        onChange={vote}
                        value={2}
                    />

                    <input
                        id={"dislike" + post?._id}
                        type="radio"
                        name="votes"
                        value={reactions.dislike}
                        className="d-none"
                        onChange={vote}
                    />
                    <label
                        htmlFor={"dislike" + post?._id}
                        className={"btn btn-secondary btn-animation " + ((post?.votes?.find(user => user.idUser === uid)?.action === -1) && "active")}
                    >
                        <i className="fas fa-chevron-down" />
                    </label>

                    <button
                        disabled={uid === post?.user?._id}
                        title={(uid === post?.user?._id ? "Ya has compartido esta publicación" : null)}
                        className={"post__share__side btn btn-secondary ml-1 "
                            + (uid !== post?.user?._id && "btn-animation")}
                        onClick={toggleShare}
                    >
                        <i className="fas fa-share-alt btn-icon-left" />
                        <span className="text-action-post">Compartir</span>
                    </button>
                </div>
                <CommentsGroup active={comments} comments={post?.comments} />
            </div >
            <PostingModal
                toggle={toggleShare}
                visible={visibleShare}
                post={(post?.postShared) ? post?.postShared : post}
            />
            <PostingModal
                toggle={toggleEdit}
                visible={visibleEdit}
                editable={post}
                post={(post?.postShared) ? post?.postShared : null}
            />

            <CarouselModal
                toggle={toggleCarousel}
                visible={visibleCarousel}
                images={post?.images}
            />
        </div>

    )
}

export default connect(null, { profilePostsHandleDelete, postsHandleVote })(Post);