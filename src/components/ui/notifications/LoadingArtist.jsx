import React from 'react'

export const LoadingArtist = () => {
    return (
        <div className="d-flex" style={{margin: '0.8rem 2rem', justifyContent: 'space-between', alignItems: 'center'}}>
            <div className="loading profile-image mr-1"></div>
            <div className="loading" style={{ flexGrow: '1', height: '1rem' }}></div>
        </div>
    )
}