import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react"

import {RootStore} from '../stores/RootStore'

const Comp2 = observer( (props) => {
    const profileStore = RootStore.ProfileStore
    
    useEffect(() => {
        console.log('Comp2 mounted');

        if(profileStore.needFirstLoad){
            profileStore.loadProfile()
        }
        return () => {
          
        };
      }, [true]);


    return  <div>
            <div>Second component {props.id && `clone ${props.id}`}</div>
            <br/>
            Status:{profileStore.loaded ? `Загружен` : `Нет не загружен`}
            <br/>
            {profileStore.loaded && `Профиль: `+JSON.stringify(profileStore.profile)}
        </div>
    

} )


export default Comp2;