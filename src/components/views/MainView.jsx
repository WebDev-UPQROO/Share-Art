import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { homePostsHandleGet, homePostsHandleUpdate } from '../../store/posts/postsActions';
import { artistFollowersHandleGet, artistListHandleGet } from '../../store/artistList/artistListActions'
import ListArtist from '../ui/listView/ListArtist'
import { ListView } from '../ui/listView/ListView'
import { LastPost } from '../ui/notifications/LastPost';
import { LoadingPost } from '../ui/notifications/LoadingPost';
import { Post } from '../ui/Post';
import Posting from '../ui/Posting';
import { routes } from './../../routes/routes';
import { getArtistList } from '../../services/userService';

const MainView = ({
    auth: { user },
    posts,
    artistList,
    homePostsHandleGet,
    homePostsHandleUpdate,
    artistListHandleGet,
}) => {

    const history = useHistory();

    useEffect(() => {
        artistListHandleGet(null, user?._id, history, getArtistList);

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
                <div className="mb-2">
                    <ListView title="Encuentra personas" icon="user" route={routes.artistList}>
                        {
                            (artistList?.artistList) ?
                                (
                                    artistList?.artistList?.map(artist => (
                                        <ListArtist
                                            key={artist._id}
                                            artist={artist}
                                        />
                                    ))
                                )
                                : (
                                    <div className="d-flex" style={{ margin: '0.7rem 2rem', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="loading profile-image mr-1"></div>
                                        <div className="loading" style={{ flexGrow: '1', height: '1rem' }}></div>
                                    </div>
                                )
                        }
                    </ListView>

                </div>


            </footer>
        </>

    )
}

const data = (state) => ({
    posts: state.postsReducer,
    auth: state.authReducer,
    artistList: state.artistListReducer,
});
const actions = {
    homePostsHandleGet,
    homePostsHandleUpdate,
    artistListHandleGet,
};
export default connect(data, actions)(MainView);