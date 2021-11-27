import { Post } from '../ui/Post';
import { CardGroup } from '../ui/CardGroup';
import { CardCategory } from '../ui/CardCategory';
import { routes } from './../../routes/routes';
import ListArtist from '../ui/listView/ListArtist';
import React from 'react'
import { Link } from 'react-router-dom';

export const ExploreView = () => {
    return (
        <main className="main-full">
            <div className="explore">
                <h1>Explorar</h1>
                <div className="explore__container">
                    <div className="explore__heading">
                        <h3>Categorias</h3>
                        <Link to="#" className="post__link btn-animation btn-link">
                            <span className="mr-1">Ir a categorias</span>
                            <i className="fas fa-arrow-right" />
                        </Link>
                    </div>

                    <div className="explore__body category">
                        <CardCategory
                            name="Música"
                            image="music"
                            route={routes.profile}
                        />

                        <CardCategory
                            name="Teatro"
                            image="theater-masks"
                            route={routes.profile}
                        />

                        <CardCategory
                            name="Escultura"
                            image="palette"
                            route={routes.profile}
                        />

                        <CardCategory
                            name="PixelArt"
                            image="laptop"
                            route={routes.profile}
                        />
                    </div>
                </div>

                <div className="explore__container">
                    <div className="explore__heading">
                        <h3>Grupos</h3>
                        <Link to="#" className="post__link btn-animation btn-link">
                            <span className="mr-1">Ir al grupos</span>
                            <i className="fas fa-arrow-right" />
                        </Link>
                    </div>

                    <div className="explore__body groups">
                        <CardGroup
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            count={4}
                            action={true}
                            route={routes.profile}
                        />

                        <CardGroup
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            count={4}
                            action={true}
                            route={routes.profile}
                        />

                        <CardGroup
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            count={4}
                            action={true}
                            route={routes.profile}
                        />

                        <CardGroup
                            name="@artist1"
                            count={4}
                            image="/assets/temp/user.jfif"
                            action={true}
                            route={routes.profile}
                        />

                    </div>
                </div>

                <div className="explore__container">
                    <div className="explore__heading">
                        <h3>Artistas</h3>
                        <Link to="#" className="post__link btn-animation btn-link">
                            <span className="mr-1">Ir a artistas</span>
                            <i className="fas fa-arrow-right" />
                        </Link>
                    </div>
                    <div>
                        <ListArtist
                            key="@artist1"
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            action={true}
                            route={routes.profile}
                        />
                        <div className="divider" />
                        <ListArtist
                            key="@artist2"
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            action={true}
                            route={routes.profile}
                        />
                        <div className="divider" />
                        <ListArtist
                            key="@artist3"
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            action={true}
                            route={routes.profile}
                        />
                        <div className="divider" />
                        <ListArtist
                            key="@artist4"
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            action={true}
                            route={routes.profile}
                        />
                    </div>
                </div>

                <div className="explore__container">
                    <div className="explore__heading">
                        <h3>Publicaciones</h3>
                        <Link to="#" className="post__link btn-animation btn-link">
                            <span className="mr-1">Ir al publicaciones</span>
                            <i className="fas fa-arrow-right" />
                        </Link>
                    </div>
                    <Post />
                </div>

            </div>
        </main>
    )
}
