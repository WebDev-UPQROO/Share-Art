import React from 'react'
import { routes } from '../../routes/routes';
import { CardSetting } from '../ui/CardSetting';

export const SettingView = () => {
    return (
        <div className="main-full">
            <h1>Configuraciones</h1>

            <div className="settings-main">
                <div className="settings__body">
                    <CardSetting route={routes.login} name="Mi Perfil"></CardSetting>
                    <CardSetting route={routes.login} name="Datos Personales"></CardSetting>
                    <CardSetting route={routes.login} name="Cambiar Contraseña"></CardSetting>
                </div>
            </div>

        </div>
    )
}
