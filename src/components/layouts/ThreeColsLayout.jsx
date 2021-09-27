import React from 'react'
import { FooterView } from '../views/FooterView'
import { MainView } from '../views/MainView'
import { MenuView } from '../views/MenuView'
import { NavbarView } from '../views/NavbarView'

export const ThreeColsTemplate = () => {
    return (
        <>
            <NavbarView />

            <div className="three-cols-layout">
                <MenuView />
                <MainView />
                <FooterView />
            </div>
        </>
    )
}
