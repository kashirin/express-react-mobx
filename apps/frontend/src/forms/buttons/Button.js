import React from 'react';
import { observer } from 'mobx-react';


export default observer(({
  disabled = false,
  content = null,
  type = 'button',
  className,
  onClick,
  label,
  icon,
}) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={className}
  >
    
    {content ||
      <span>
        <i className={`fa fa-${icon}`} />
        <b>{label}</b>
      </span>}
  </button>
));