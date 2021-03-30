import React, { useEffect } from 'react';
import { observer } from "mobx-react"
import {action} from "mobx"

import {RootStore} from '../stores/RootStore'

const elkProfileStore = RootStore.ElkProfileStore

const refreshAction = async (e) => {
    await elkProfileStore.loadProfile()
}

const RefresherElk = observer( ( props ) => {
    
    useEffect(() => {
        console.log('RefresherElk mounted');

        return () => {
          
        };
      }, [ ]);

    
      
    
    return <span onClick={action( refreshAction )} className="like-link">{(elkProfileStore.isLoading ) ? 'Перечитываем профиль ...' : 'Обновить с сервера elk store!' }</span>
    

} )


export default RefresherElk;