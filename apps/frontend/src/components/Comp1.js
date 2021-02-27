import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react"

import {RootStore} from '../stores/RootStore'

const Comp1 = observer( () => {
    const profileStore = RootStore.ProfileStore
    
    useEffect(() => {
        console.log('Comp1 mounted');

        if(profileStore.needFirstLoad){
            profileStore.loadProfile()

            setTimeout(()=>{
                const cp = {...profileStore.profile}
                cp.NAME = cp.NAME+'-'
                profileStore.saveProfile(cp)
            },6000)

        }
        return () => {
          
        };
      }, [true]);


    return  <div>
            <div>First component</div>
            <br/>
            Status:{profileStore.loaded ? `Загружен` : `Нет не загружен`}
            <br/>
            {profileStore.loaded && `Профиль: `+JSON.stringify(profileStore.profile)}
        </div>
    

} )


export default Comp1;