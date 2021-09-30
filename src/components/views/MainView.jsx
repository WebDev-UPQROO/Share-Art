import React from 'react'
import { ListArtist } from '../ui/listView/ListArtist';
import { ListView } from '../ui/listView/ListView'
import { routes } from './../../routes/routes';

export const MainView = () => {
    return (
        <>
            <main className="main-center">
                <h1>MainView</h1>
            </main>
            <footer className="footer">
                <div className="mb-2">
                    <ListView title="Artistas Destacados" icon="user" list={[
                        (<ListArtist
                            key="@artist1"
                            name="@artist1"
                            image="./assets/temp/user.jfif"
                            action={true}
                            route={routes.profile}
                        />),
                        (<ListArtist
                            key="@artist2"
                            name="@artist2"
                            image="./assets/temp/user.jfif"
                            action={false}
                            route={routes.profile}
                        />),
                        (<ListArtist
                            key="@artist3"
                            name="@artist3"
                            image="./assets/temp/user.jfif"
                            action={true}
                            route={routes.profile}
                        />),
                    ]} route={routes.explore} />
                </div>



                <ListView title="Grupos Destacados" icon="users" list={[
                    (<ListArtist
                        key="@group1"
                        name="@group1"
                        image="./assets/temp/user.jfif"
                        action={true}
                        route={routes.profile}
                    />),
                    (<ListArtist
                        key="@group2"
                        name="@group2"
                        image="./assets/temp/user.jfif"
                        action={false}
                        route={routes.profile}
                    />),
                ]} route={routes.explore} />
            </footer>
        </>

    )
}
