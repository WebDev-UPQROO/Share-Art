import { Post } from '../ui/Post';
import { CardGroup } from '../ui/CardGroup';
import { CardCategory } from '../ui/CardCategory';
import { routes } from './../../routes/routes';
import { ListArtist } from '../ui/listView/ListArtist';
import React from 'react'
import { Link } from 'react-router-dom';

export const ExploreView = () => {
    return (
        <main className="main-full">
            <div className="explore">
                <h1>Explorar</h1>
                <div className="explore-categories">
                    <div className="categories__heading">
                        <h3>Categorias</h3>
                        <Link to="#" className="post__link btn-animation btn-link">
                            <span className="mr-1">Ir a categorias</span>
                            <i className="fas fa-arrow-right" />
                        </Link>
                    </div>

                    <div className="categories__body">
                        <CardCategory
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            route={routes.profile}
                        />

                        <CardCategory
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            route={routes.profile}
                        />

                        <CardCategory
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            route={routes.profile}
                        />

                        <CardCategory
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            route={routes.profile}
                        />
                    </div>
                </div>

                <div className="explore-groups">
                    <div className="groups__heading">
                        <h3>Grupos</h3>
                        <Link to="#" className="post__link btn-animation btn-link">
                            <span className="mr-1">Ir al grupos</span>
                            <i className="fas fa-arrow-right" />
                        </Link>
                    </div>

                    <div className="groups__body">
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

                <div className="explore-artists">
                    <div className="artists__heading">
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
                        <div style={{ borderTop: "1px solid #1C1C1C ", marginTop: 3, marginBottom: 3 }}></div>
                        <ListArtist
                            key="@artist2"
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            action={true}
                            route={routes.profile}
                        />
                        <div style={{ borderTop: "1px solid #1C1C1C ", marginTop: 3, marginBottom: 3 }}></div>
                        <ListArtist
                            key="@artist3"
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            action={true}
                            route={routes.profile}
                        />
                        <div style={{ borderTop: "1px solid #1C1C1C ", marginTop: 3, marginBottom: 3 }}></div>
                        <ListArtist
                            key="@artist4"
                            name="@artist1"
                            image="/assets/temp/user.jfif"
                            action={true}
                            route={routes.profile}
                        />
                    </div>
                </div>

                <div className="explore-posts">
                    <div className="posts__heading">
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
