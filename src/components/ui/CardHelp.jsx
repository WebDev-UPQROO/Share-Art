import React from 'react'
import useModal from '../../hooks/useModal'


export const CardHelp = ({ name, content }) => {
    const { toggle, visible } = useModal(true)
    return (
        <div className="dropdown">
            <div className={`drop-body ${visible ? 'active' : 'disable'}`}>
                {content}
            </div>
            <div className="drop-title" onClick={toggle}>
                <p>{name}</p>
            </div>

        </div>
    )
}
