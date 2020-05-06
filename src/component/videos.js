import React  from 'react';
import data from '../api.json';

class Video extends React.Component
{
    constructor()
    {
        super()
        {
            this.state={
                text:''
            }
        }
    }

    handleOnChange=(e)=>
    {
        this.setState({[e.target.id]:[e.target.value]})
    }

    handleClick=()=>
    {
           const{text}=this.state;
           let {video}=this.props;
           video.comment=text;
    }
    render()
    {
        const {video}=this.props;
        const question=data.questions.filter(question=>question.id==video.questionId);
    
    
        console.log('in videos question',question);
        return(
            <div className='question'>
              <h4>Question</h4> 
        <p>{question[0].question}</p>
        
        <h4 className='title'>Videos</h4>
        <video className='video'src={video.src}></video>
        <h4 className='title'>Comment</h4>
          <p>{video.comment} 
          <input  id='text' type='text'placeholder='comment' onChange={this.handleOnChange}/> 
           <button onClick={this.handleClick}className='btn'>Save</button>
           </p>
           
    
            </div>
        )
    }
    
}

export default Video;