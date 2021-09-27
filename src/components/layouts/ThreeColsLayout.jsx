import React from 'react'
import { Navbar } from '../ui/Navbar'
import { FooterView } from '../views/FooterView'
import { MainView } from '../views/MainView'
import { MenuView } from '../views/MenuView'

export const ThreeColsTemplate = () => {
    return (
        <>
            <Navbar />

            <div className="three-cols-layout">
                <MenuView />
                <MainView />
                <FooterView />
            </div>
        </>
    )
}
