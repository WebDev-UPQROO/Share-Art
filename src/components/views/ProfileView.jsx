import React from 'react'
import { routes } from '../../routes/routes'
import { ListArtist } from '../ui/listView/ListArtist'
import { ListView } from '../ui/listView/ListView'
import { Post } from '../ui/Post'
import { ProfileInfo } from '../ui/ProfileInfo'

export const ProfileView = () => {
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
