import React from 'react'
import { CardHelp } from '../ui/CardHelp'


export const HelpView = () => {
    const content = [
        {
            name: "Cambiar foto de perfil",
            content: "No puedes"
        },
        {
            name: "Modificar contraseña",
            content: "No puedes"
        },
        {
            name: "Editar publicaciones y comentarios",
            content: (
                <div >
                    <p>
                        Si tú realizaste esa publicación o comentario, haz clic sobre el botón <img src="/assets/help/editButton.jpg" alt="menu" align="center" /> ubicado en la esqunina superior derecha y selecciona la opcion "Editar".
                    </p>

                    <br />
                    <div align="center">
                        <img src="/assets/help/editScreen1.jpg" alt="edit" />
                    </div>
                    <br />

                    <p>
                        A continuación se te abrirá una ventana en donde podras editar tu publicción o comentario
                    </p>
                    <br />

                    <small>
                        *Si tu no realizaste esa publicación pero concideras que es inapropiada, contactanos: <b>fkvhteam20@gmail.com</b>
                    </small>
                </div >
            )
        },
        {
            name: "Borrar publicación y comentarios",
            content: (
                <div >
                    <p>
                        Si tú realizaste esa publicación o comentario, haz clic sobre el botón <img src="/assets/help/editButton.jpg" alt="menu" align="center" /> ubicado en la esqunina superior derecha y selecciona la opcion "Eliminar".
                    </p>

                    <br />
                    <div align="center">
                        <img src="/assets/help/deleteScreen1.jpg" alt="edit" />
                    </div>
                    <br />

                    <p>
                        Haz clic en el boton confirmar y listo, tu publicación será eliminada
                    </p>
                    <br />

                    <small>
                        *Si tu no realizaste esa publicación pero concideras que es inapropiada, contactanos: <b>fkvhteam20@gmail.com</b>
                    </small>
                </div >
            )
        },
    ]
    return (
        <div className="main-full">
            <h1 className="mb-5">Centro de Ayuda</h1>
            {
                content.map(item => (
                    <div className="mt-2" key={item.name}>
                        <CardHelp name={item.name} content={item.content} />
                    </div>
                )
                )
            }


        </div>
    )
}
