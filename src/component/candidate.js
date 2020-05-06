import React from 'react';

const Candidate=(props)=>
{
    const {candidate,handleOnClick}=props;

    const handleClick=()=>
    {
        handleOnClick(candidate);
    }
    return(
          
    <button onClick={handleClick}className='candidate-btn'>{candidate.name}</button>
    )
}


export default Candidate;