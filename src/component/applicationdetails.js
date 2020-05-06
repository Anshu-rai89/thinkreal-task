import React from 'react';


import Video from './videos';
class Application extends React.Component
{
    constructor()
    {
        super()
        {
            this.state={
                text:'',
                id:''
            }
        }
    }

    handleOnChange=(e)=>
    {
        this.setState({[e.target.id]:[e.target.value],id:[e.target.name]})
    }

    handleClick=()=>
    {
           const{text,id}=this.state;
           let {application}=this.props;
          console.log('text',text,id);
           application.videos[id].comment=text;
            console.log('modified comment',application);
           fetch(`http://localhost:9000/applications`,{
               method:'POST',
               data:application,
               headers: {
                'Content-Type': 'application/json'
               }}).then(response=>response.json())
               .then(data=>console.log('saving coment',data));
            }
    render()
    {
        const {canididate,application}=this.props;
    
  
   
        return (
            <div className='candidate-b'>
            
            <h3 className='title'> {canididate.name} Application Details</h3>
             {
                 application.videos.map((video,index)=>
                    <Video video={video} id={index} handleClick={this.handleClick} handleOnChange={this.handleOnChange}/>
                    )
             }
       
            </div>
        )
    }
    
}

export default Application;