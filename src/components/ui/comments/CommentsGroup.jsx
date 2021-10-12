import React from 'react'
import { Comment } from './Comment'
import { MyComment } from './MyComment'

export const CommentsGroup = ({ active }) => {

    const comment = [[1, 2], [3], [[[7, 8], [9]], 5, 6]];

    return (

        (active) &&
        <>
            < div className="comments-group" >
                <div className="mb-2">
                    <MyComment />
                </div>

                {
                    comment.map(item => (
                        <div className="">
                            <Comment key={item} item={item} counter={0} />
                        </div>
                    ))
                }
            </div>
        </>


    );
}
