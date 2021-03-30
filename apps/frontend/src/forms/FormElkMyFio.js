import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import SimpleInput from './inputs/SimpleInput'
import FormControls from './controls/FormControls'
import { when} from 'mobx'


import {RootStore} from '../stores/RootStore'

const elkProfileStore = RootStore.ElkProfileStore




export default observer( ({ form }) => {

  const onRefresh = (e) => {
    e.preventDefault();
    form.update({
      NAME: elkProfileStore.PROFILE_FIO.NAME,
      SURNAME: elkProfileStore.PROFILE_FIO.SURNAME,
      PATRONYMIC: elkProfileStore.PROFILE_FIO.PATRONYMIC,
    });
    
  
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    form.validate()
    .then(({ isValid }) => {
       if(isValid){
         elkProfileStore.saveProfile('FIO', form.values(), true)
         .then(()=>{
           console.log('saved');
         })
       }else{
         alert('Ошибки валидации!')
       }
    });
  }
  
 

  when(
    // Once...
    () => elkProfileStore.loaded,
    // ... then.
    () => {
      // инициируем
      form.update({
        NAME: elkProfileStore.PROFILE_FIO.NAME,
        SURNAME: elkProfileStore.PROFILE_FIO.SURNAME,
        PATRONYMIC: elkProfileStore.PROFILE_FIO.PATRONYMIC,
      });
    }
  )

  
  
  //trace(true)

  useEffect(() => {
    console.log('FormElkMyFio mounted!');
    
    
    return () => {
      
    };
  }, [ ]);

  useEffect(() => {

    console.log('render FormElkMyFio');

    return () => console.log('unmounting FormElkMyFio...');
  })

  if(elkProfileStore.loaded){
  
  return (
    <div className="widget_my_profile">
    <form>
      <h2 className="light-red">Редактировать ФИО</h2>
  
      <SimpleInput field={form.$('NAME')} />
      <SimpleInput field={form.$('SURNAME')} />
      <SimpleInput field={form.$('PATRONYMIC')} />
      
      <FormControls title="К начальным" onClick={onRefresh} />
      <FormControls title="Сохранить на сервер" onClick={onSubmit} />
     
    </form>
    </div>
  )}else{
    return <div className="widget_my_profile">
      Загружается форма...
    </div>
  }

} );