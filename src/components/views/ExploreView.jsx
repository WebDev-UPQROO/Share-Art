import Post from '../ui/Post';
import React, { useEffect } from 'react'
import { Seeker } from '../ui/Seeker';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { LoadingPost } from '../ui/notifications/LoadingPost';
import { LastPost } from '../ui/notifications/LastPost';
import { homePostsHandleGet, homePostsHandleUpdate } from '../../store/posts/postsActions';
import { connect } from 'react-redux';

const ExploreView = ({
    auth: { user },
    posts,
    homePostsHandleGet,
    homePostsHandleUpdate
}) => {

    const history = useHistory();

    useEffect(() => {
        if (posts.section !== "home")
            homePostsHandleGet(user?._id, history);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?._id])

    useEffect(() => {
        if (posts.error !== null)
            toast.error(posts.error);
    }, [posts.error]);

    return (
        <main className="main-center">
            <div className="explore">
                <h1>Explorar</h1>
                <div className="explore__container">
                    <div className="explore__heading">
                        <Seeker />
                    </div>

                    <div className="explore__body">
                        <InfiniteScroll
                            dataLength={posts.posts.length}
                            next={() =>
                                homePostsHandleUpdate(
                                    user?._id,
                                    posts.posts[posts.posts.length - 1]?._id,
                                    history
                                )}
                            hasMore={!posts.limit}
                            loader={<LoadingPost />}
                            scrollThreshold={1}
                            endMessage={<LastPost />}
                        >
                            {posts.posts.map((post, index) => (<Post key={index} post={post} uid={user?._id} />))}
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        </main>
    )
}

const data = (state) => ({
    posts: state.postsReducer,
    auth: state.authReducer
});
const actions = {
    homePostsHandleGet,
    homePostsHandleUpdate
};
export default connect(data, actions)(ExploreView);