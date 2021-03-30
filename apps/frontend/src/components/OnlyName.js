import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react"

import {RootStore} from '../stores/RootStore'

const profileStore = RootStore.ProfileStore

const OnlyName = observer( ( props ) => {
    
    useEffect(() => {
        console.log('OnlyName mounted');

        // загружаем все от чего зависит этот компонент

        if(profileStore.needFirstLoad){
            profileStore.loadProfile()

        }
        return () => {
          
        };
      }, [true]);


      useEffect(() => {

        console.log('render OnlyName!');
    
        return () => console.log('unmounting OnlyName...');
      })

    

    if( !profileStore.loaded ){
        return <div className="widget_field">Ожидается загрузка виджета...</div>
    }else{
        return <div className="widget_field">
            <h3>Имя</h3><br/>
        {profileStore.myname}
    </div>
    }

    

} )


export default OnlyName;