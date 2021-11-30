import React, { useEffect } from 'react'
import { 
        artistFollowersHandleGet, 
        artistFollowedHandleGet, 
        artistFollowersHandleUpdate,
        artistFollowedHandleUpdate 
        } from '../../store/artistList/artistListActions'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useHistory } from 'react-router'
import { connect } from 'react-redux'
import ListArtist from '../ui/listView/ListArtist'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import { LoadingArtist } from '../ui/notifications/LoadingArtist';
import { LastPost } from '../ui/notifications/LastPost';


export const ArtistView = ({
    auth: { user },
    artistFollowers,
    artistFollowed,
    artistFollowersHandleGet,
    artistFollowersHandleUpdate,
    artistFollowedHandleGet,
}

    
) => {

    let location = useLocation();
    const history = useHistory();

    useEffect(() => {
        if (location.pathname === '/app/artist/followers') {
            artistFollowersHandleGet(user?._id, history);
        }
        else{
            artistFollowedHandleGet(user?._id, history);
        }

    }, []);

    useEffect(() => {
        if (artistFollowers.error !== null)
            toast.error(artistFollowers.error);
        if (artistFollowed.error !== null)
            toast.error(artistFollowed.error);
    }, [artistFollowers.error, artistFollowed.error]);

   
    
    return(
    <main className="main-full">
            
        {
            (location.pathname === '/app/artist/followers') ?
                ( 
                    <>
                        <h1 style={{margin: '2rem 1.8rem', fontSize: '4rem', fontWeight: '700'}}>Seguidores</h1>
                        <div className="mb-2">
                            
                                <InfiniteScroll
                                    dataLength={artistFollowers?.artistFollowers?.length}
                                    next={() =>
                                        artistFollowersHandleUpdate(
                                            user?._id,
                                            artistFollowers?.artistFollowers[artistFollowers?.artistFollowers.length - 1]?._id,
                                            history
                                        )}
                                    hasMore={!artistFollowers?.limit}
                                    loader={<LoadingArtist/>}
                                    scrollThreshold={1}
                                    endMessage={<LastPost />}
                                >
                                    {artistFollowers?.artistFollowers?.map( ( artist, index ) => 
                                    <> 
                                        <ListArtist key={artist._id} id={artist._id} />

                                        {(artistFollowers?.artistFollowers?.length - 1 === index) ?  

                                        null : <div style={{ borderTop: "1px solid #1C1C1C ", marginTop: 3, marginBottom: 3 }}></div>}
                                    </>
                                    )}
                                </InfiniteScroll>
                                
                        </div>
                    </>
                )
            :   (
                    <>
                        <h1 style={{margin: '2rem 1.8rem', fontSize: '4rem', fontWeight: '700'}}>Siguiendo</h1>
                        <div className="mb-2">
                                <InfiniteScroll
                                        dataLength={artistFollowed?.artistFollowed?.length}
                                        next={() =>
                                            artistFollowedHandleUpdate(
                                                user?._id,
                                                artistFollowed?.artistFollowed[artistFollowed?.artistFollowed.length - 1]?._id,
                                                history
                                            )}
                                        hasMore={!artistFollowed?.limit}
                                        loader={<LoadingArtist/>}
                                        scrollThreshold={1}
                                        endMessage={<LastPost />}
                                    >
                                        {artistFollowed?.artistFollowed?.map( ( artist, index ) => 
                                        <> 
                                            <ListArtist key={artist._id} id={artist._id} />

                                            {(artistFollowed?.artistFollowed?.length - 1 === index) ?  

                                            null : <div style={{ borderTop: "1px solid #1C1C1C ", marginTop: 3, marginBottom: 3 }}></div>}
                                        </>
                                        )}
                                    </InfiniteScroll>
                            </div>
                        </>
                )
        }
            </main>
       
    )
}

const data = (state) => ({
    user: state.userReducer,
    auth: state.authReducer,
    artistFollowers: state.artistListReducer,
    artistFollowed: state.artistListReducer
});
const actions = {
    artistFollowersHandleGet, 
    artistFollowersHandleUpdate,
    artistFollowedHandleGet,
    artistFollowedHandleUpdate 
};
export default connect(data, actions)(ArtistView);