import React from 'react';
import data from '../api.json';
import ApplicationDetail  from './applicationdetails';
import Header from '../component/header';
class Details extends React.Component
{
   constructor()
   {
       super();
       this.state={
        application:[]  
       }
   }

   componentDidMount()
   {
       const{candidate}=this.props;
       fetch(`http://localhost:9000/applications?id=${candidate[0].applicationId}`)
       .then(response=>response.json())
       .then(data=>
        {  
            this.setState({application:data})
        })
   }
    render()
    {
        const {candidate,handleshowDetails}=this.props;
       
        const {application}=this.state
      
        return(
            <div>
               <Header text='Application Info' handleshowDetails={handleshowDetails}/>
               
             
                <h3>Candidate Details</h3>

                {candidate[0].applicationId ?application.length>0 ?<ApplicationDetail canididate={candidate[0]} application={application[0]} />:<h3>Loading...</h3>
                :<p>Candidates Havent Applied  </p>
                }

            </div>
        )
    }
}

export default Details;