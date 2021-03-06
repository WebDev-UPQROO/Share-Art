import React, { useState } from 'react'
import { MyComment } from './MyComment';

export const Comment = ({ item, counter }) => {

    const notFinalComment = typeof item === 'object';
    const [response, setResponse] = useState(false);
    const [more, setMore] = useState(false);

    var classes = ["comment"];
    if (notFinalComment && more) classes.push('not-final');
    if (counter !== 0) classes.push('ml-4');

    return (
        <div className={classes.join(' ')} >
            <div className="comment__content">
                <div className="d-flex">
                    <picture className='profile-image xs mr-1'>
                        <img
                            src='/assets/temp/user.jfif'
                            alt="profile"
                        />
                    </picture>
                    <span className="comment__content__user mr-1">Sofi Vera </span>
                    <span className="comment__content__info">@sofi12 &#8226; 4d</span>
                </div>

                <p className="comment__content__text">
                    este es un comentario de prueba, supongamos que aqui esta el señor de los churros ofreciendo churros a todo el mundo.
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
                (item && notFinalComment && more) &&

                item.map(i => (
                    <Comment key={i} item={i} counter={counter + 1} />
                ))
            }
        </div>
    );
}
