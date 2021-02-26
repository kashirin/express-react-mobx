import React, { useState, useEffect } from 'react';

import Comp1 from './Comp1'
import Comp2 from './Comp2'



const Dashboard = (props) => {

    

    return <div>
            <div>Верхний див</div>
            <hr/>
            <div><Comp1/></div>
            <hr/>
            <div><Comp2/></div>
            <hr/>
            {[1,2,3,4].map(e=>( <div><Comp2 id={e} /><hr/></div> ))}
           </div>

}


export default Dashboard;