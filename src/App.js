import React from 'react';

import Details from './component/details';
import Candidate from './component/candidate';
import Header from './component/header';
class App  extends React.Component
 {
     constructor()
     {
       super()
       {
         this.state=
         {
           candidates:[],
           showDetails:false,
           single:[]
         }
       }
     }
     

     componentDidMount()
     {
       fetch('http://localhost:9000/candidates')
       .then(response=>response.json())
       .then(data=>
        {
          console.log(data);
          this.setState({candidates:data});
        })
     }
     handleOnClick=(c)=>
     {
          const {candidates}=this.state;
          let single=candidates.filter(candidate=>candidate.name==c.name);
          this.setState({showDetails:true,single:single});
     }
     handleshowDetails=()=>
     {
       this.setState({showDetails:false});
     } 
  render()
  {
    const{candidates,showDetails,single}=this.state;
    console.log('candiates',candidates);
    return (
      <div className="App">

       {showDetails?<Details  candidate={single} handleshowDetails={this.handleshowDetails}/> 
       :<div className='candidate'>
         <Header text='Applicants' handleshowDetails={this.handleshowDetails}/>
       <h3 className='title'>Applicants List </h3>
       <ul>
       {
         candidates.map(candidate=>
         <li><Candidate candidate={candidate} handleOnClick={this.handleOnClick}/> </li>
           )
       }
       </ul>
      </div>}
      
      </div>
    );
  }
}

export default App;
