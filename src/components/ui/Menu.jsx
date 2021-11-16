import React from 'react';
import { routes } from '../../routes/routes';
import { ListRoute } from './listView/ListRoute';
import { ListView } from './listView/ListView';
import { authHandleLogout } from '../../store/auth/authActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const Menu = ({ user, auth: {uid}, authHandleLogout, menu: [menu, setMenu] }) => {
    const history = useHistory();

    const handleClick = () => {
        setMenu(menu => !menu);
    };

    const menuOptions = [
        { title: 'Mi Perfil', icon: 'user', route: routes.profile + uid },
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

    return (
        <div className={`menu ${menu ? 'show' : 'hide'}`}>
            <div className="mb-2">
                <ListRoute title="Inicio" icon="home" route={routes.home} exact={true} onClick={handleClick} />
            </div>

            <div className="mb-2">
                <ListView title="Explorar" icon="drafting-compass" list={exploreList} route={routes.explore} onClick={handleClick} />
            </div>

            {
                (user.uid) &&
                menuOptions.map(item =>
                    <div className="mb-2" key={item.title}>
                        <ListRoute title={item.title} icon={item.icon} route={item.route} onClick={handleClick} />
                    </div>
                )
            } {
                (user.uid) &&
                <div onClick={() => authHandleLogout(history)}>
                    <ListRoute title="Cerrar Sesión" icon="sign-out-alt" route={routes.login} arrow={false} activeClassName="" onClick={handleClick} />
                </div>
            }


        </div>
    )
}

const data = (state) => ({ user: state.authReducer, auth: state.authReducer });
const actions = { authHandleLogout };
export default connect(data, actions)(Menu);