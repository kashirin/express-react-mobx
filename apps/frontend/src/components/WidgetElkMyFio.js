import React, { useEffect } from 'react';
import { observer } from "mobx-react"

import {RootStore} from '../stores/RootStore'

const elkProfileStore = RootStore.ElkProfileStore

const WidgetElkMyFio = observer( ( props ) => {
    
    useEffect(() => {
        console.log('WidgetElkMyFio mounted');

        // загружаем все от чего зависит этот компонент

        if(elkProfileStore.needFirstLoad){
            elkProfileStore.loadProfile()

        }
        
        return () => {
          
        };
      }, [  ]);

      useEffect(() => {

        console.log('render WidgetElkMyFio!');
    
        return () => console.log('unmounting WidgetElkMyFio...');
      })


    if( !elkProfileStore.loaded ){
        return <div className="widget_my_profile">Ожидается загрузка виджета...</div>
    }else{
        return <div className="widget_my_profile">
            <h3>Мое ФИО</h3><br/>
            <pre>{JSON.stringify(elkProfileStore.PROFILE_FIO, null, 4)}</pre>
    </div>
    }

    

} )


export default WidgetElkMyFio;