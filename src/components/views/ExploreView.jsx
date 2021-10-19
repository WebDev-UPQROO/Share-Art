import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                            <FontAwesomeIcon icon="arrow-right" />
                        </Link>
                    </div>
                </div>

                <div className="explore-groups">
                    <div className="groups__heading">
                        <h3>Grupos</h3>
                        <Link to="#" className="post__link btn-animation btn-link">
                            <span className="mr-1">Ir al grupos</span>
                            <FontAwesomeIcon icon="arrow-right" />
                        </Link>
                    </div>
                </div>

                <div className="explore-artists">
                    <div className="artists__heading">
                        <h3>Artistas</h3>
                        <Link to="#" className="post__link btn-animation btn-link">
                            <span className="mr-1">Ir a artistas</span>
                            <FontAwesomeIcon icon="arrow-right" />
                        </Link>
                    </div>
                </div>

                <div className="explore-posts">
                    <div className="posts__heading">
                        <h3>Artistas</h3>
                        <Link to="#" className="post__link btn-animation btn-link">
                            <span className="mr-1">Ir al publicaciones</span>
                            <FontAwesomeIcon icon="arrow-right" />
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    )
}
