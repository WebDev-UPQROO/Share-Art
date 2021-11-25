import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { toast } from 'react-toastify'
import { routes } from '../../routes/routes'
import { profilePostsHandleGet, profilePostsHandleUpdate } from '../../store/posts/postsActions'
import { userGetInfo } from '../../store/user/userActions'
import { ListArtist } from '../ui/listView/ListArtist'
import { ListView } from '../ui/listView/ListView'
import { LastPost } from '../ui/notifications/LastPost'
import { LoadingPost } from '../ui/notifications/LoadingPost'
import { Post } from '../ui/Post'
import ProfileInfo from '../ui/ProfileInfo'

const ProfileView = ({
    auth,
    user,
    userGetInfo,
    posts,
    profilePostsHandleGet,
    profilePostsHandleUpdate
}) => {

    let { uid } = useParams();
    const history = useHistory();

    // Load Data
    useEffect(() => {

        if (uid !== user.user._id)
            userGetInfo(uid, history);

        if (posts.section !== "profile" || uid !== user.user._id)
            profilePostsHandleGet(uid, history);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uid]);

    // Waiting Errorss
    useEffect(() => {
        if (user.error !== null)
            toast.error(user.error);
        if (posts.error !== null)
            toast.error(posts.error);
    }, [user.error, posts.error]);

    return (
        <>
            <div className="main-center">
                <ProfileInfo uid={auth?.user?._id} />

                <InfiniteScroll
                    dataLength={posts.posts.length}
                    next={() =>
                        profilePostsHandleUpdate(
                            uid,
                            posts.posts[posts.posts.length - 1]?._id,
                            history
                        )}
                    hasMore={!posts.limit}
                    loader={<LoadingPost />}
                    scrollThreshold={1}
                    endMessage={<LastPost />}
                >
                    {posts.posts.map((post, index) => (<Post key={index} post={post} uid={auth?.user?._id} />))}
                </InfiniteScroll>
            </div>
            <footer className="footer">
                <div className="mb-2">
                    <ListView title="Artistas Destacados" icon="user" list={[
                        (<ListArtist
                            key="@artist1"
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            action={true}
                            route={routes.artist}
                        />)
                    ]} route={routes.explore} />
                </div>



                <ListView title="Grupos Destacados" icon="users" list={[
                    (<ListArtist
                        key="@group1"
                        name="@group1"
                        image="/assets/temp/user.jfif"
                        action={true}
                        route={routes.artist}
                    />)
                ]} route={routes.explore} />
            </footer>
        </>

    )
}

const data = (state) => ({
    user: state.userReducer,
    auth: state.authReducer,
    posts: state.postsReducer
});
const actions = {
    userGetInfo,
    profilePostsHandleGet,
    profilePostsHandleUpdate
};
export default connect(data, actions)(ProfileView);