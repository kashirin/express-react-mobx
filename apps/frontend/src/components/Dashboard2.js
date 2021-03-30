import React, { useState, useEffect } from 'react';

import WidgetMyProfile from './WidgetMyProfile'
import WidgetMyMessages from './WidgetMyMessages'
import OnlyName from './OnlyName'



const Dashboard2 = (props) => {

    

    return <div>
                <WidgetMyProfile/>
                <WidgetMyMessages/>
                <OnlyName/>
           </div>

}


export default Dashboard2;