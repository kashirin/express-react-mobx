import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react"
import {action} from "mobx"

import {RootStore} from '../stores/RootStore'

const profileStore = RootStore.ProfileStore
const messagesStore = RootStore.MessagesStore

const refreshAction = async (e) => {
    await profileStore.loadProfile()
    await messagesStore.loadMessages()
}

const Refresher = observer( ( props ) => {
    
    useEffect(() => {
        console.log('Refresher mounted');

        return () => {
          
        };
      }, [true]);

    
      
    
    return <span onClick={action( refreshAction )} className="like-link">{(profileStore.isLoading || messagesStore.isLoading) ? 'ОБНОВЛЯЕТСЯ...' : 'ОБНОВИТЬ!' }</span>
    

} )


export default Refresher;