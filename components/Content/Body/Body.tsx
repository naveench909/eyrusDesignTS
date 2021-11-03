import React from 'react'
import { useGlobalContext } from '../../context'
import Progress from './Progress/progress'
import EmailSubscription from './emailSubs/emailSubscription'

function Body() {

    const { emailSubscription , progress , sidebarValue, menuValue } = useGlobalContext();

    let data;
    if(menuValue === "Project Setting"){
        data = emailSubscription;
    }else{
        data = progress;
    }
    const headerContent = data[0];
    const bodyContent = data[1];

    return (
        <React.Fragment>
            {data===emailSubscription? <EmailSubscription header={headerContent} body={bodyContent}/> : <Progress header={headerContent} body={bodyContent} /> }
        </React.Fragment>
    )
}

export default Body
