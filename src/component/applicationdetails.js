import React from 'react';

import data from '../api.json';
import Video from './videos';
const Application=(props)=>
{
    const {canididate,application}=props;
    
  
   
    return (
        <div className='candidate-b'>
        
        <h3 className='title'> {canididate.name} Application Details</h3>
         {
             application.videos.map(video=>
                <Video video={video}/>
                )
         }
   
        </div>
    )
}

export default Application;