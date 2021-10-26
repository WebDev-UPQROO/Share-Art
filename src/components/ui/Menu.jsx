import React, { useContext } from 'react';
import { authActions } from '../../reducers/authReducer';
import { routes } from '../../routes/routes';
import { ShareArtContext } from '../../ShareArtContext';
import { ListRoute } from './listView/ListRoute';
import { ListView } from './listView/ListView';

export const Menu = ({menu: [menu, setMenu]}) => {
    const { user, authDispatch } = useContext(ShareArtContext);

    const handleClick = () => {
        setMenu(menu => !menu);
    };

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
            <ListRoute arrow={false} title={item.title} icon={item.icon} route={item.route} onClick={handleClick} />
        </div>
    );

    const handleLogOut = () => {
        const authAction = { type: authActions.logout };
        authDispatch(authAction);
    };

    return (
        <div className={`menu ${menu ? 'show' : 'hide'}`}>
            <div className="mb-2">
                <ListRoute title="Inicio" icon="home" route={routes.home} exact={true} onClick={handleClick} />
            </div>

            <div className="mb-2">
                <ListView title="Explorar" icon="drafting-compass" list={exploreList} route={routes.explore} onClick={handleClick}/>
            </div>

            {
                (user.logged) &&
                menuOptions.map(item =>
                    <div className="mb-2" key={item.title}>
                        <ListRoute title={item.title} icon={item.icon} route={item.route} onClick={handleClick}/>
                    </div>
                )
            } {
                (user.logged) &&
                <div onClick={handleLogOut}>
                    <ListRoute title="Cerrar Sesión" icon="sign-out-alt" route={routes.login} arrow={false} activeClassName="" onClick={handleClick} />
                </div>
            }


        </div>
    )
}
