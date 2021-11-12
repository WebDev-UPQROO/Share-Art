import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { postsHandleGet } from '../../store/posts/postsActions';
import { ListArtist } from '../ui/listView/ListArtist';
import { ListView } from '../ui/listView/ListView'
import { LastPost } from '../ui/notifications/LastPost';
import { Loading } from '../ui/notifications/Loading';
import { Post } from '../ui/Post';
import { Posting } from '../ui/Posting';
import { routes } from './../../routes/routes';

const MainView = ({ posts, postsHandleGet }) => {
    const history = useHistory();
    useEffect(() => {
        postsHandleGet("6169a793fc358e71ee5fee8f", history);
    }, [postsHandleGet, history])

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
                    next={() => postsHandleGet("6169a793fc358e71ee5fee8f", history)}
                    hasMore={posts.posts.length < 20}
                    loader={<Loading />}
                    scrollThreshold={1}
                    endMessage={<LastPost />}
                >
                    {posts.posts.map((post, index) => (<Post key={index} />))}
                </InfiniteScroll>
            </main>


            <footer className="footer">
                <div className="mb-2">
                    <ListView title="Artistas Destacados" icon="user" list={[
                        (
                            <ListArtist
                                key="@artist1"
                                name="@artist1"
                                image="/assets/temp/user.jfif"
                                action={true}
                                route={routes.profile}
                            />
                        )
                    ]} route={routes.explore} />
                </div>



                <ListView title="Grupos Destacados" icon="users" list={[
                    (<ListArtist
                        key="@group1"
                        name="@group1"
                        image="/assets/temp/user.jfif"
                        action={true}
                        route={routes.profile}
                    />)
                ]} route={routes.explore} />
            </footer>
        </>

    )
}

const data = (state) => ({ posts: state.postsReducer });
const actions = { postsHandleGet };
export default connect(data, actions)(MainView);