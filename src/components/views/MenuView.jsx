import React from 'react'
import { MenuButton } from '../ui/MenuButton'
import { MenuList } from '../ui/MenuList'

export const MenuView = () => {

    const menuOptions = [
        { title: 'Mi Espacio', icon: 'user' },
        { title: 'Configuraciones', icon: 'cog' },
        { title: 'Centro de Ayuda', icon: 'question-circle' },
    ];

    const exploreOptions = [
        { title: 'Categorías', icon: 'th-large' },
        { title: 'Grupos', icon: 'users' },
        { title: 'Artistas', icon: 'child' },
        { title: 'Publicaciones', icon: 'comment' }
    ];

    const menuList = menuOptions.map(item =>
        <div className="mb-2" key={item.title}>
            <MenuList title={item.title} icon={item.icon} />
        </div>
    );

    const exploreList = exploreOptions.map(item =>
        <div className="ml-3" key={item.title}>
            <MenuButton arrow={false} title={item.title} icon={item.icon} />
        </div>
    );

    return (
        <div className="menu">
            <div className="mb-2">
                <MenuList title="Explorar" icon="drafting-compass" list={exploreList} />
            </div>
            {menuList}
        </div>
    )
}
