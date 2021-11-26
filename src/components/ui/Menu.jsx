import React from 'react';
import { routes } from '../../routes/routes';
import { ListRoute } from './listView/ListRoute';
import { authHandleLogout } from '../../store/auth/authActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

const Menu = ({ auth: {user}, authHandleLogout, menu: [menu, setMenu] }) => {
    const history = useHistory();

    const handleClick = () => {
        setMenu(menu => !menu);
    };

    const menuOptions = [
        { title: 'Mi Perfil', icon: 'user', route: routes.profile + user?._id },
        { title: 'Configuraciones', icon: 'cog', route: routes.configs },
        { title: 'Centro de Ayuda', icon: 'question-circle', route: routes.help },
    ];

    return (
        <div className={`menu ${menu ? 'show' : 'hide'}`}>
            <div className="mb-2">
                <ListRoute title="Inicio" icon="home" route={routes.home} exact={true} onClick={handleClick} />
            </div>

            <div className="mb-2">
                <ListRoute title="Explorar" icon="drafting-compass" route={routes.explore} exact={true} onClick={handleClick} />
            </div>
            
            {
                (user?._id) &&
                menuOptions.map(item =>
                    <div className="mb-2" key={item.title}>
                        <ListRoute title={item.title} icon={item.icon} route={item.route} onClick={handleClick} />
                    </div>
                )
            } {
                (user?._id) &&
                <div onClick={() => authHandleLogout(history)}>
                    <ListRoute title="Cerrar Sesión" icon="sign-out-alt" route={routes.login} arrow={false} activeClassName="" onClick={handleClick} />
                </div>
            }


        </div>
    )
}

const data = (state) => ({ auth: state.authReducer });
const actions = { authHandleLogout };
export default connect(data, actions)(Menu);