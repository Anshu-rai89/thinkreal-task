import React from 'react';

const Header=(props)=>
{ const {handleshowDetails}=props;
  const handleClick=()=>
  {
    handleshowDetails();
  }
    return(
        <div className='header'>
            . <button className='close' onClick={handleClick}><i class="material-icons">close</i> </button>
    <span className='title'>{props.text}</span>
        </div>
    )
}

export default Header;