import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { toast } from 'react-toastify'
import { routes } from '../../routes/routes'
import { profilePostsHandleGet, profilePostsHandleUpdate } from '../../store/posts/postsActions'
import { artistListHandleGet } from '../../store/artistList/artisListActions'
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
    artistList,
    profilePostsHandleGet,
    profilePostsHandleUpdate,
    artistListHandleGet,
}) => {

    let { uid } = useParams();
    const history = useHistory();

    // Load Data
    useEffect(() => {
        if (uid !== user.user._id) {
            userGetInfo(uid, history);
            artistListHandleGet(history);
        }

        if (posts.section !== "profile" || uid !== user.user._id)
            profilePostsHandleGet(uid, history);


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
                    <ListView title="Artistas Destacados" icon="user" route={routes.explore}>

                        {
                            (artistList?.artistList > 0) ?
                                (
                                    artistList?.artistList?.map(artist => (
                                        <ListArtist
                                            key={artist._id}
                                            artistList={artist}
                                            action={true}
                                            route={routes.artist}
                                        />
                                    ))
                                )
                                : (
                                    <div className="d-flex">
                                        <div className="loading profile-image mr-1"></div>
                                        <div className="loading" style={{ flexGrow: '1', height: '1rem' }}></div>
                                    </div>
                                )

                        }








                    </ListView>
                </div>



                {/* <ListView title="Grupos Destacados" icon="users" list={[
                    <ListArtist
                        key="@group1"
                        artisList={null}
                        action={true}
                        route={routes.artist}
                    />
                ]} route={routes.explore} /> */}
            </footer>
        </>

    )
}

const data = (state) => ({
    user: state.userReducer,
    auth: state.authReducer,
    posts: state.postsReducer,
    artistList: state.artistListReducer
});
const actions = {
    userGetInfo,
    profilePostsHandleGet,
    profilePostsHandleUpdate,
    artistListHandleGet
};
export default connect(data, actions)(ProfileView);