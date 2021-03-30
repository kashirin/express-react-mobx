import React, {Fragment} from 'react';
import { observer } from 'mobx-react';

export default observer(({ field, type = 'text', placeholder = null }) => (
  <div className="simple-input-element">
    <label htmlFor={field.id} className="">{field.label}</label>
    <input
      className=""
      aria-describedby="name-desc"
      {...field.bind({ type, placeholder })}
    />
    {field.error && <Fragment><br/><small className="red">{field.error}</small></Fragment>}
  </div>
));