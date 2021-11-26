import React from 'react'

export const ErrorForm = ({children}) => {
    return (
        <small className="error-message mt-1">
            *{children}
        </small>
    )
}
