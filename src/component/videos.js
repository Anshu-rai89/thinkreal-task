import React  from 'react';

class Video extends React.Component
{
    constructor()
    {
        super()
        {
            this.state={
                text:'',
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

    handleOnChange=(e)=>
    {
        this.setState({[e.target.id]:[e.target.value]})
    }

    handleClick=()=>
    {
           const{text}=this.state;
           let {video,id}=this.props;

           video.comment=text;

           fetch(`http://localhost:9000/applications?/${id}`,{
               method:'PUT',
               data:video,
               headers: {
                'Content-Type': 'application/json'
               }}).then(response=>response.json())
               .then(data=>console.log('saving coment',data));
        //    fs.writeFile("../api.json", JSON.stringify(data), (err) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     };
        //     console.log("File has been created");
        // });
    }
    render()
    {
        const {video,id}=this.props;
        const {question}=this.state;
    
    
        console.log('in videos question',question[0]);
        return(
            <div className='question'>
             
              {question.length>0 && <div>
                  
                <h4>Question</h4> 
                  <p>{question[0].question}</p>
        
                <h4 className='title'>Videos</h4>
                <video className='video'src={video.src}></video>
                <h4 className='title'>Comment</h4>
                <p>{video.comment} 
                <input  id='text' type='text'placeholder='comment' onChange={this.handleOnChange}/> 
                <button onClick={this.handleClick}className='btn'>Save</button>
           </p> </div>}
     
           
    
            </div>
        )
    }
    
}

export default Video;