import React from 'react'
import { MenuButton } from '../ui/MenuButton'

export const MenuView = () => {
    return (
        <div className="menu">
            <MenuButton title="Explorar" icon="drafting-compass" />
            <MenuButton title="Mi Espacio" icon="drafting-compass" />
            <MenuButton title="Configuraciones" icon="drafting-compass" />
            <MenuButton title="Centro de Ayuda" icon="drafting-compass" />
        </div>
    )
}
