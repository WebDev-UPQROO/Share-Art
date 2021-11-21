import React, { useState } from 'react'
import { getDate } from '../../../helpers/getDate';
import { getPhoto } from '../../../helpers/getPhoto';
import { MyComment } from './MyComment';

export const Comment = ({ id, comment, counter }) => {
    console.log(id);

    const notFinalComment = comment?.comments?.length > 0;
    const [response, setResponse] = useState(false);
    const [more, setMore] = useState(false);

    var classes = ["comment"];
    if (notFinalComment && more) classes.push('not-final');
    if (counter !== 0) classes.push('ml-4');

    if (notFinalComment)
        comment?.comments.forEach(comment => {
            console.log("hijo " + comment);
        });

    return (
        <div className={classes.join(' ')} >
            <div className="comment__content">
                <div className="d-flex">
                    <picture className='profile-image xs mr-1'>
                        <img
                            src={getPhoto(comment?.user?.photo)}
                            alt="profile"
                        />
                    </picture>
                    <span className="comment__content__user mr-1">{comment?.user?.name}</span>
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

                comment?.comments.map(id => (
                    <Comment key={id} id={id} comment={null} counter={counter + 1} />
                ))
            }
        </div>
    );
}
