import React from 'react'

export const LoadingPost = () => {
    return (
         <div className="mb-2">
         <div className="post">
             <div className="d-flex mb-1">
                 <div className="loading profile-image mr-1"></div>
                 <div className="d-in-block">
                     <div className="loading mb-1" style={{ width: '12rem', height: '1rem' }}></div>
                     <div className="post__link loading mb-1" style={{ width: '6rem', height: '1rem' }}></div>
                 </div>
             </div>


             <div className="loading mb-1" style={{ width: '100%', height: '10rem' }}></div>
             <div className="loading mb-1" style={{ width: '100%', height: '2rem' }}></div>
         </div>
     </div>
    )
}
