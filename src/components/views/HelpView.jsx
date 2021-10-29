import React from 'react'
import { CardHelp } from '../ui/CardHelp'


export const HelpView = () => {
    const content = [
        {
            name: "Olvidé mi contraseña ¿Cómo puedo recuperarla",
            content: "No puedes"
        },
        {
            name: "Olvidé mi contraseña ¿Cómo puedo recuperarla",
            content: "No puedes"
        },
        {
            name: "Olvidé mi contraseña ¿Cómo puedo recuperarla",
            content: "No puedes"
        }
    ]
    return (
        <div className="main-full">
            <h1>Centro de Ayuda</h1>
            {
                content.map(item =>
                    <CardHelp name={item.name} content={item.content} />
                )
            }


        </div>
    )
}
