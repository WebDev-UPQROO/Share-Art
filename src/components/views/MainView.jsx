import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { homePostsHandleGet, homePostsHandleUpdate } from '../../store/posts/postsActions';
import { ListArtist } from '../ui/listView/ListArtist';
import { ListView } from '../ui/listView/ListView'
import { LastPost } from '../ui/notifications/LastPost';
import { LoadingPost } from '../ui/notifications/LoadingPost';
import { Post } from '../ui/Post';
import Posting from '../ui/Posting';
import { routes } from './../../routes/routes';

const MainView = ({
    auth: { user },
    posts,
    homePostsHandleGet,
    homePostsHandleUpdate
}) => {

    const history = useHistory();

    useEffect(() => {
        if (posts.section !== `home${user?._id}`)
            homePostsHandleGet(user?._id, history);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (posts.error !== null)
            toast.error(posts.error);
    }, [posts.error]);

    return (
        <>
            <main className="main-center">
                <Posting />

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
            </main>


            <footer className="footer">
                <div className="mb-5">
                    <ListView title="Artistas Destacados" icon="user" list={[
                    /*     (
                            <ListArtist
                                key="@artist1"
                                name="@artist1"
                                image="/assets/temp/user.jfif"
                                action={true}
                                route={routes.profile}
                            />
                        ) */
                    ]} route={routes.explore} />
                </div>



                <ListView title="Grupos Destacados" icon="users" list={[
                 /*    (<ListArtist
                        key="@group1"
                        name="@group1"
                        image="/assets/temp/user.jfif"
                        action={true}
                        route={routes.profile}
                    />) */
                ]} route={routes.explore} />
            </footer>
        </>

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
export default connect(data, actions)(MainView);