import React from 'react';

import data from './api.json';
import Details from './component/details';
import Candidate from './component/candidate';
class App  extends React.Component
 {
     constructor()
     {
       super()
       {
         this.state=
         {
           candidates:data.candidates,
           showDetails:false,
           single:[]
         }
       }
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

       {showDetails?<Details  candidate={single} handleshowDetails/> 
       :<div className='candidate'>
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
