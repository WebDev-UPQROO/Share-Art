import React from 'react'
import { MenuButton } from './MenuButton'

export const MenuList = ({ title, icon, list }) => {
    return (
        <div className="bg-background br-1">
            <MenuButton title={title} icon={icon} />
            {list}
        </div>
    )
}
