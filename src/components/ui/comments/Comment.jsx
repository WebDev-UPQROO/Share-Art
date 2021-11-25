import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getDate } from '../../../helpers/getDate';
import { getPhoto } from '../../../helpers/getPhoto';
import { selectComment } from '../../../selectors/commentsSelectors';
import { commentsHandleGet } from '../../../store/comments/commentsActions';
import { MyComment } from './MyComment';

const Comment = ({ id, comment, auth, commentsHandleGet, counter }) => {
    useEffect(() => {
        if (!comment)
            commentsHandleGet([id]);
    }, [])

    const notFinalComment = comment?.comments?.length > 0;
    const [response, setResponse] = useState(false);
    const [more, setMore] = useState(false);

    var classes = ["comment"];
    if (notFinalComment && more) classes.push('not-final');
    if (counter !== 0) classes.push('ml-4');

    const reactions = {
        like: 1,
        dislike: 0,
    }
    const userReaction = comment?.votes?.find(user => user[0] === auth?.user?._id);
    const userLike = userReaction && userReaction[1] === reactions.like;
    const userDislike = userReaction && userReaction[1] === reactions.dislike;

    return (
        <>
            {
                (true) ?
                    <div className={classes.join(' ')} >
                        <div className="comment__content">
                            <div className="d-flex">
                                <picture className='profile-image xs mr-1'>
                                    <img
                                        src={getPhoto(comment?.user?.photo)}
                                        alt="profile"
                                    />
                                </picture>
                                <span className="comment__content__user mr-1">{comment?.user?.name || "Desconocido"}</span>
                                <span className="comment__content__info">{comment?.user?.username} &#8226; {getDate(comment?.date)}</span>

                                {
                                    (auth?.user?._id === comment?.user?._id) &&
                                    (
                                        <div className="ml-auto dropdown">
                                            <button
                                                className="dropdown-btn"
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
                                    )
                                }
                            </div>

                            <p className="comment__content__text">
                                {comment?.comment}
                            </p>
                        </div>
                        <div className="comment__actions">
                            <div className="comment__actions__buttons">
                                <input
                                    id={"like" + comment?._id}
                                    type="radio"
                                    name="votes"
                                    defaultChecked={userLike}
                                    value={reactions.like}
                                    className="d-none"
                                />
                                <label
                                    htmlFor={"like" + comment?._id}
                                    className={"btn btn-link-secondary btn-animation " + (userLike && "active")}
                                >
                                    <i className="fas fa-chevron-up" />
                                </label>

                                <span className="comment__actions__info">
                                    {comment?.votes?.length ?? 0}
                                </span>

                                <input
                                    id={"dislike" + comment?._id}
                                    type="radio" name="votes"
                                    defaultChecked={userDislike}
                                    value={reactions.dislike}
                                    className="d-none"
                                />
                                <label
                                    htmlFor={"dislike" + comment?._id}
                                    className={"btn btn-link-secondary btn-animation " + (userDislike && "active")}
                                >
                                    <i className="fas fa-chevron-down" />
                                </label>

                                {
                                    (counter < 3) &&
                                    <button
                                        className="btn btn-link-secondary btn-animation"
                                        onClick={() => setResponse(!response)}
                                    >
                                        <span>{response ? 'Cancelar' : 'Responder'}</span>
                                    </button>
                                }

                                {
                                    (notFinalComment) &&
                                    <button className="btn btn-link-secondary btn-animation" onClick={() => setMore(!more)}>
                                        <span>{more ? 'Ocultar' : 'Ver más...'}</span>
                                    </button>
                                }

                            </div>
                        </div>

                        {
                            (counter < 3 && response) &&
                            <div className="pb-2 bg-background">
                                <MyComment />
                            </div>
                        }

                        {
                            (comment && notFinalComment && more) &&

                            comment.comments.map(comment => (
                                <CommentRecursive key={comment} id={comment} counter={counter + 1} />
                            ))
                        }
                    </div>
                    :
                    <div className="loading mb-2" style={{ width: '100%', height: '8rem' }} />
            }
        </>

    );
}

const data = (state, { id }) => ({
    comment: selectComment(id, state.commentsReducer),
    auth: state.authReducer
});

var CommentRecursive = connect(data, { commentsHandleGet })(Comment);
export default CommentRecursive;