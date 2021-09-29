import React, { useContext } from 'react';
import { authActions } from '../../../reducers/authReducer';
import { routes } from '../../../routes/routes';
import { ShareArtContext } from '../../../ShareArtContext';
import { MenuButton } from './MenuButton';
import { MenuList } from './MenuList';

export const Menu = () => {

    const { mobileMenu, user, authDispatch } = useContext(ShareArtContext);
    const [menu] = mobileMenu;

    const menuOptions = [
        { title: 'Mi Perfil', icon: 'user', route: routes.profile },
        { title: 'Configuraciones', icon: 'cog', route: routes.configs },
        { title: 'Centro de Ayuda', icon: 'question-circle', route: routes.help },
    ];

    const exploreOptions = [
        { title: 'Grupos', icon: 'users', route: routes.groups },
        { title: 'Artistas', icon: 'child', route: routes.artist },
        { title: 'Publicaciones', icon: 'comment', route: routes.publications }
    ];

    const exploreList = exploreOptions.map(item =>
        <div className="ml-3" key={item.title}>
            <MenuButton arrow={false} title={item.title} icon={item.icon} route={item.route} />
        </div>
    );

    const handleLogOut = () => {
        const authAction = { type: authActions.logout };
        authDispatch(authAction);
    };

    return (
        <div className={`menu ${menu ? 'show' : 'hide'}`}>
            <div className="mb-2">
                <MenuButton title="Inicio" icon="home" route='/' exact={true} />
            </div>

            <div className="mb-2">
                <MenuList title="Explorar" icon="drafting-compass" list={exploreList} route="/explore" />
            </div>

            {
                (user.logged) &&
                menuOptions.map(item =>
                    <div className="mb-2" key={item.title}>
                        <MenuButton title={item.title} icon={item.icon} route={item.route} />
                    </div>
                )
            } {
                (user.logged) &&
                <div onClick={handleLogOut}>
                    <MenuButton title="Cerrar Sesión" icon="sign-out-alt" route='/' arrow={false} activeClassName="" />
                </div>
            }


        </div>
    )
}
