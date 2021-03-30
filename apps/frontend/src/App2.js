import React, { Component } from "react";
import { observer } from "mobx-react"

import MobxReactForm from 'mobx-react-form'
import dvr from "mobx-react-form/lib/validators/DVR"
import validatorjs from "validatorjs"

const SimpleInput = observer(({ field, type = 'text', placeholder = null }) => (
    <div className="measure">
      <label htmlFor={field.id} className={$label}>
        {field.label}
      </label>
      <input {...field.bind({ type, placeholder }) } className={$input}/>
      <small className={$small}>
        {field.error}
      </small>
    </div>
  ));

const formComp = observer(({ form }) => (
    <form onSubmit={form.onSubmit}>
      <SimpleInput field={form.$('email')} />
      <SimpleInput field={form.$('password')} />
      <SimpleInput field={form.$('passwordConfirm')} />
  
      <br />
      <button type="submit" className={$btn} onClick={form.onSubmit}>Submit</button>
      <button type="button" className={$btn} onClick={form.onClear}>Clear</button>
      <button type="button" className={$btn} onClick={form.onReset}>Reset</button>
  
      <p>{form.error}</p>
    </form>
    ));

const plugins = {
    dvr: dvr(validatorjs)
  };
  const $input = 'input-reset ba b--black-10 br1 pa2 mb2 db w-100 f6';
  const $label = 'f7 db mb2 mt3 light-silver';
  const $small = 'f6 black-60 db red';
  const $btn = 'f6 link dim bn br2 ph3 pv2 mr2 dib white bg-dark-blue';


const fields = {
    email:{
      label: "Email",
      placeholder: "Insert Email",
      rules: "required|email|string|between:5,25",
      value: "s.jobs@apple.com"
    },
    password:{
      label: "Password",
      placeholder: "Insert Password",
      rules: "required|string|between:5,25"
    },
    passwordConfirm:{
      label: "Password Confirmation",
      placeholder: "Confirm Password",
      rules: "required|string|same:password"
    }
    }

    const hooks = {
        onSuccess(form) {
          alert("Form is valid! Send the request here.");
          // get field values
          console.log("Form Values!", form.values());
        },
        onError(form) {
          alert("Form has errors!");
          // get all form errors
          console.log("All form errors", form.errors());
        }
      };


console.log('111');
    const mr = new MobxReactForm({ fields }, { plugins, hooks })
console.log('222');


class App2 extends Component {

    constructor(props) {
        super(props)
    }
    

    


    render() {
        return (
            
            <div className="container-fluid">
                <h2>!!!</h2>
            </div>
            
        );
    }
}

export default App2;
