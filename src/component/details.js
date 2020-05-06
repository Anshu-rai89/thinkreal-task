import React from 'react';
import data from '../api.json';
import ApplicationDetail  from './applicationdetails';
import Header from '../component/header';
class Details extends React.Component
{
   
    render()
    {
        const {candidate,handleshowDetails}=this.props;
       
        const application=data.applications.filter(application=>application.id==candidate[0].applicationId);
      //  console.log('in  deatils',candidate[0],application[0]);
        return(
            <div>
               <Header text='Application Info' handleshowDetails={handleshowDetails}/>
                <h3>Candidate Details</h3>

                {candidate[0].applicationId?<ApplicationDetail canididate={candidate[0]} application={application[0]} />
                :<p>Candidates Havent Applied  </p>
                }

            </div>
        )
    }
}

export default Details;