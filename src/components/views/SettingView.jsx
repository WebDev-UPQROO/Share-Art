import React from 'react'
import { routes } from '../../routes/routes';
import { CardSetting } from '../ui/CardSetting';

export const SettingView = () => {
    return (
        <div className="main-full">
            <h1 className="mb-5">Configuraciones</h1>

            <div className="settings-main">
                <div className="settings__body">
                    <CardSetting
                        route={routes.login}
                        name="Mi Perfil"
                        icon="user"
                    />
                    <CardSetting
                        route={routes.login}
                        name="Datos Personales"
                        icon="address-book"
                    />
                    <CardSetting
                        route={routes.login}
                        name="Cambiar Contraseña"
                        icon="lock"
                    />
                </div>
            </div>

        </div>
    )
}
