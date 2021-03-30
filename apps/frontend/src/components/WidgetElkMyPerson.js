import React, { useEffect } from 'react';
import { observer } from "mobx-react"

import {RootStore} from '../stores/RootStore'

const elkProfileStore = RootStore.ElkProfileStore

const WidgetElkMyPerson = observer( ( props ) => {
    
    useEffect(() => {
        console.log('WidgetElkMyPerson mounted');

        // загружаем все от чего зависит этот компонент

        if(elkProfileStore.needFirstLoad){
            elkProfileStore.loadProfile()

        }
        
        return () => {
          
        };
      }, [ ]);

      useEffect(() => {

        console.log('render WidgetElkMyPerson!');
    
        return () => console.log('unmounting WidgetElkMyPerson...');
      })


    if( !elkProfileStore.loaded ){
        return <div className="widget_my_profile">Ожидается загрузка виджета...</div>
    }else{
        return <div className="widget_my_profile">
            <h3>Мои персданные</h3><br/>
            <pre>{JSON.stringify(elkProfileStore.PROFILE_PERSON, null, 4)}</pre>
    </div>
    }

    

} )


export default WidgetElkMyPerson;