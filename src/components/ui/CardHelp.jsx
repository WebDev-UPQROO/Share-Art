import React from 'react'
import useModal from '../../hooks/useModal'


export const CardHelp = ({ name, content }) => {
    const { toggle, visible } = useModal(true)
    return (
        <div className="dropdown mt-3">
            <div className={`drop-body ${visible ? 'active' : 'disable'}`}>
                <p>{content}</p>
            </div>
            <div className="drop-title" onClick={toggle}>
                <p>{name}</p>
            </div>

        </div>
    )
}
