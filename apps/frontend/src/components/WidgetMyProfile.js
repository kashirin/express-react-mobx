import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react"

import {RootStore} from '../stores/RootStore'

const profileStore = RootStore.ProfileStore
const messagesStore = RootStore.MessagesStore

const WidgetMyProfile = observer( ( props ) => {
    
    useEffect(() => {
        console.log('WidgetMyProfile mounted');

        // загружаем все от чего зависит этот компонент

        if(profileStore.needFirstLoad){
            profileStore.loadProfile()

        }
        if(messagesStore.needFirstLoad){
            messagesStore.loadMessages()

        }
        return () => {
          
        };
      }, [true]);


    if(!profileStore.loaded || !messagesStore.loaded){
        return <div className="widget_my_profile">Ожидается загрузка виджета...</div>
    }else if(!profileStore.profile){
        return <div className="widget_my_profile">Кривые данные по ФИО :(</div>
    }else{
        return <div className="widget_my_profile">
            <h3>Мой профиль</h3><br/>
        <b>Фамилия:</b>{profileStore.profile.SURNAME}
        <br/>
        <b>Имя:</b>{profileStore.profile.NAME}
        <br/>
        <b>Отчество:</b>{profileStore.profile.PATRONYMIC}
        <br/>
        <b>ФИО полное:</b>{profileStore.fioComplete ? 'Да' : 'Нет'}
        <br/>
        <b>Количство сообщений:</b>{messagesStore.count}
        <br/>
        {profileStore.isLoading && <span className="redtext">Информация обновляется...</span>}
    </div>
    }

    

} )


export default WidgetMyProfile;