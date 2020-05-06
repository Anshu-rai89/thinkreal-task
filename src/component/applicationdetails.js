import React from 'react';


import Video from './videos';
const Application=(props)=>
{
    const {canididate,application}=props;
    
  
   
    return (
        <div className='candidate-b'>
        
        <h3 className='title'> {canididate.name} Application Details</h3>
         {
             application.videos.map(video=>
                <Video video={video} id={application.id}/>
                )
         }
   
        </div>
    )
}

export default Application;