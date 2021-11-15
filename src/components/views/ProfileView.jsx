import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { toast } from 'react-toastify'
import { routes } from '../../routes/routes'
import { userGetInfo } from '../../store/user/userActions'
import { ListArtist } from '../ui/listView/ListArtist'
import { ListView } from '../ui/listView/ListView'
import { Post } from '../ui/Post'
import ProfileInfo from '../ui/ProfileInfo'

const ProfileView = ({ user, auth, userGetInfo }) => {
    let { uid } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (uid !== user.user._id)
            userGetInfo(uid, history);
    }, [userGetInfo, uid, history, user.user._id]);

    useEffect(() => {
        if (user.error !== null)
            toast.error(user.error);
    }, [user.error]);

    return (
        <>
            <div className="main-center">
                <ProfileInfo uid={auth.uid}/>

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

const data = (state) => ({ user: state.userReducer, auth: state.authReducer });
const actions = { userGetInfo };
export default connect(data, actions)(ProfileView);