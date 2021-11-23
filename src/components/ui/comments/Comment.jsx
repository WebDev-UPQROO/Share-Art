import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getDate } from '../../../helpers/getDate';
import { getPhoto } from '../../../helpers/getPhoto';
import { selectComment } from '../../../selectors/commentsSelectors';
import { commentsHandleGet } from '../../../store/comments/commentsActions';
import { MyComment } from './MyComment';

const Comment = ({ id, comment, auth, commentsHandleGet, counter }) => {

    useEffect(() => {
        console.log(auth);
        console.log(comment);
        if (!comment)
            commentsHandleGet([id]);
    }, [])

    const notFinalComment = comment?.comments?.length > 0;
    const [response, setResponse] = useState(false);
    const [more, setMore] = useState(false);

    var classes = ["comment"];
    if (notFinalComment && more) classes.push('not-final');
    if (counter !== 0) classes.push('ml-4');

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
                            </div>

                            <p className="comment__content__text">
                                {comment?.comment}
                            </p>
                        </div>
                        <div className="comment__actions">
                            <div className="comment__actions__buttons">
                                <button className="btn btn-link-secondary btn-animation">
                                    <i className="fas fa-chevron-up" />
                                </button>

                                <span className="comment__actions__info">122k</span>

                                <button className="btn btn-link-secondary btn-animation">
                                    <i className="fas fa-chevron-down" />
                                </button>

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