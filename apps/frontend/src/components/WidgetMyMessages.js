import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react"

import {RootStore} from '../stores/RootStore'

const messagesStore = RootStore.MessagesStore

const WidgetMyMessages = observer( ( props ) => {
    
    useEffect(() => {
        console.log('WidgetMyMessages mounted');

        // загружаем все от чего зависит этот компонент

        if(messagesStore.needFirstLoad){
            messagesStore.loadMessages()

        }
        return () => {
          
        };
      }, [true]);

    
    if(!messagesStore.loaded){
        return <div className="widget_my_messages">Ожидается загрузка виджета...</div>
    }else if(messagesStore.count <= 0){
        return <div className="widget_my_messages">У вас нет сообщений :(</div>
    }else{
        return <div className="widget_my_messages">
        <h3>Мои сообщения</h3>
        <br/>
        {messagesStore.messages.map((msg)=>{
            return <div>
                <b>{msg.title}</b><br/>
                &nbsp;&nbsp;{msg.body}
                <br/>
            </div>
        })}
        <br/>
        {messagesStore.isLoading && <span className="redtext">Информация по сообщениям обновляется...</span>}
    </div>
    }

    

} )


export default WidgetMyMessages;