import React from 'react'
import { CardSetting } from '../ui/CardSetting';

export const SettingView = () => {
    return (
        <div className="main-full">
            <h1>Configuraciones</h1>

            <div className="settings-main">
                <div className="settings__body">
                    <CardSetting></CardSetting>
                    <CardSetting></CardSetting>
                    <CardSetting></CardSetting>
                </div>
            </div>

        </div>
    )
}
