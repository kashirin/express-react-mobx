
import vjf from 'mobx-react-form/lib/validators/VJF'
import validator from 'validator'
import { isRequired, isEvenNumberLength } from '../validators/SimpleValidators'

export default  {

  
  
  plugins: {
    vjf: vjf(validator),
  },

 
  fields: [{
    name: 'NAME',
    label: 'Имя',
    placeholder: 'введите имя',
    validators: [isRequired],
  }, {
    name: 'SURNAME',
    label: 'Фамилия',
    placeholder: 'введите фамилию',
    validators: [isRequired, isEvenNumberLength],
  }, {
    name: 'PATRONYMIC',
    label: 'Отчество',
    placeholder: 'введите отчество',
    validators: [isRequired],
  }],

  useValues(values){
    const fields = this.fields
    for(let j in fields){
      let name = fields[j].name ? fields[j].name : j
      if(values[name]){
        fields[j].value = values[name]
      }
    }
    return fields
  },

  
  hooks: {
  }

    
    
}