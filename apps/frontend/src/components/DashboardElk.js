import React, { useEffect } from 'react';


import WidgetElkMyFio from './WidgetElkMyFio'
import WidgetElkMyPerson from './WidgetElkMyPerson'
import FormElkMyFio from '../forms/FormElkMyFio'
import ElkMyFio from '../forms/mobx-forms/ElkMyFio'

import MobxReactForm from 'mobx-react-form';





const DashboardElk = (props) => {

    
    useEffect(() => {
        console.log('DashboardElk mounted');

        return () => {
          
        };
      }, [ ]);


    return <div>
                <WidgetElkMyFio/>
                <WidgetElkMyPerson/>
                <FormElkMyFio form={ new MobxReactForm( { fields: ElkMyFio.fields }, { plugins: ElkMyFio.plugins, hooks: ElkMyFio.hooks } ) } />
           </div>

}


export default DashboardElk;