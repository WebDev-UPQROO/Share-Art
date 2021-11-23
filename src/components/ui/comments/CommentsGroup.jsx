import React from 'react'
import Comment from './Comment'
import { MyComment } from './MyComment'

export const CommentsGroup = ({ active, comments }) => {

    return (

        (active) &&
        <>
            < div className="comments-group" >
                <div className="mb-2">
                    <MyComment />
                </div>

                {
                    (comments.length > 0) ?
                    comments.map(idComment => (
                        <div key={idComment}>
                            <Comment id={idComment} counter={0} />
                        </div>
                    ))
                    :
                    <p className="text-sm">Se el primero en comentar!!</p>
                }
            </div>
        </>


    );
}
