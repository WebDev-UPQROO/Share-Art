import React, { useState } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import { Link } from 'react-router-dom';
import { getDate } from '../../helpers/getDate';
import { getPhoto } from '../../helpers/getPhoto';
import { routes } from '../../routes/routes';

export const PostPreview = ({ post }) => {
    const [isExpand, setExpand] = useState(false);

    return (
        <div className="post preview">
            <div className="post__heading">
                <picture className="profile-image">
                    <img src={getPhoto(post?.user?.photo?.url)} alt="default" />
                </picture>
                <div className="ml-1">
                    <Link to={routes.profile + post?.user?._id} className="post__heading--user"  >
                        {post?.user?.username}
                    </Link>
                    <p>
                        <small>{getDate(post?.date)} </small>
                        <small className="post__heading--details">
                            &#8226; Arte Abstracto
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
                    (post?.photo) &&
                    (<div className="post__images">
                        <img src={post?.photo} alt="pub" />
                    </div>)
                }
            </div>
        </div >
    )
}
