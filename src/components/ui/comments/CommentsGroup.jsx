import React from 'react'
import { Comment } from './Comment'
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
                    comments.map(comment => (
                        <div key={comment._id}>
                            <Comment id={comment._id} comment={comment} counter={0} />
                        </div>
                    ))
                }
            </div>
        </>


    );
}
