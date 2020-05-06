import React  from 'react';

class Video extends React.Component
{
    constructor()
    {
        super()
        {
            this.state={
                question:[]
            }
        }
    }

    componentDidMount()
    {
        const {video}=this.props;
        fetch(`http://localhost:9000/questions?id=${video.questionId}`)
        .then(response=>response.json())
        .then(data=>
            {
                console.log(' mount question',data);
                this.setState({question:data});
            })
    }
    handleOnClick=()=>
    {
        const {handleClick}=this.props;
        handleClick();
    }

    
    render()
    {
        const {video,handleOnChange,id}=this.props;
        const {question}=this.state;
    
    
        console.log('in videos question',question[0]);
        return(
            <div className='question'>
             
              {question.length>0 && <div>
                  
                <h4>Question</h4> 
                  <p>{question[0].question}</p>
        
                <h4 >Videos</h4>
                <video className='video'src={video.src}></video>
                <h4 >Comment</h4>
                <p>{video.comment} 
                <input name={`${id}`} id='text' type='text'placeholder='comment' onChange={handleOnChange}/> 
                <button onClick={this.handleOnClick}className='btn'>Save</button>
           </p> </div>}
     
           
    
            </div>
        )
    }
    
}

export default Video;