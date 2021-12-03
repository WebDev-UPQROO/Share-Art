import React, { useEffect, useState } from 'react'
import {
    artistListHandleGet,
    artistListHandleUpdate
} from '../../store/artistList/artistListActions'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHistory, useParams } from 'react-router'
import { connect } from 'react-redux'
import ListArtist from '../ui/listView/ListArtist'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import { LoadingArtist } from '../ui/notifications/LoadingArtist';
import { LastPost } from '../ui/notifications/LastPost';
import { getArtistList, getFollowed, getFollowers } from '../../services/userService';

export const ArtistView = ({
    auth: { user },
    artistList: { artistList, limit, error },
    artistListHandleGet,
    artistListHandleUpdate,
}) => {

    let location = useLocation();
    const params = useParams();
    const history = useHistory();
    const [title, settitle] = useState("Encuentra personas");
    const [actualService, setActualService] = useState(() => getArtistList)

    const url = Object.values(params).reduce(
        (path, param) => path.replace('/' + param, ''),
        location.pathname,
    );

    useEffect(() => {
        switch (url) {
            case '/app/artist/followers':
                artistListHandleGet(params.uid, user._id, history, getFollowers);
                settitle("Seguidores");
                setActualService(() => getFollowers);
                break;
            case '/app/artist/followed':
                artistListHandleGet(params.uid, user._id, history, getFollowed);
                settitle("Siguiendo");
                setActualService(() => getFollowed);

                break;
            default:
                artistListHandleGet(null, user._id, history, getArtistList);
                break;
        }
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (error !== null)
            toast.error(error);
    }, [error]);

    return (
        <main className="main-full">
            <button onClick={history.goBack} className="btn btn-animation btn-link">
                <i className="fas fa-arrow-left" />
                <span className="ml-2">Regresar</span>
            </button>
            <h1 style={{ margin: '2rem 1.8rem', fontSize: '4rem', fontWeight: '700' }}>{title}</h1>
            <div className="mb-2">
                {(artistList) ?
                    <InfiniteScroll
                        dataLength={artistList?.length}
                        next={() =>
                            artistListHandleUpdate(
                                params.uid || null,
                                user?._id,
                                artistList[artistList.length - 1]?.idFollow || artistList[artistList.length - 1]?._id,
                                history,
                                actualService
                            )
                        }
                        hasMore={!limit}
                        loader={<LoadingArtist />}
                        scrollThreshold={1}
                        endMessage={<LastPost />}
                    >
                        {artistList?.map((artist, index) =>
                            <div key={artist._id}>
                                <ListArtist artist={artist} />

                                {(artistList?.length - 1 === index)
                                    ? null
                                    : <div className="divider" />
                                }
                            </div>
                        )}
                    </InfiniteScroll>
                    : <div
                        className="d-flex"
                        style={{
                            margin: '0.7rem 2rem',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                        <div className="loading profile-image mr-1" />
                        <div className="loading" style={{ flexGrow: '1', height: '1rem' }} />
                    </div>
                }

            </div>
        </main>

    )
}

const data = (state) => ({
    user: state.userReducer,
    auth: state.authReducer,
    artistList: state.artistListReducer,
});
const actions = {
    artistListHandleGet,
    artistListHandleUpdate,
};
export default connect(data, actions)(ArtistView);