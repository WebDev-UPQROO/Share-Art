import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { toast } from 'react-toastify'
import { routes } from '../../routes/routes'
import { ArtistListHandleGet } from '../../store/artistList/artisListAction'
import { userGetInfo } from '../../store/user/userActions'
import { ListArtist } from '../ui/listView/ListArtist'
import { ListView } from '../ui/listView/ListView'
import { Post } from '../ui/Post'
import ProfileInfo from '../ui/ProfileInfo'

const ProfileView = ({ uid = "6169a793fc358e71ee5fee8f", user, userGetInfo, ArtistListHandleGet }) => {
    const history = useHistory();

    useEffect(() => {
        userGetInfo(uid, history);
        ArtistListHandleGet(history);
    }, [userGetInfo, ArtistListHandleGet, uid, history]);

    useEffect(() => {
        if (user.error !== null)
            toast.error(user.error);
    }, [user.error]);
    
    return (
        <>
            <div className="main-center">
                <ProfileInfo />

                <Post />
                <Post />
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

const data = (state) => ({ user: state.userReducer, artistList : state.artistList.Reducer });
const actions = { userGetInfo, ArtistListHandleGet };
export default connect(data, actions)(ProfileView);