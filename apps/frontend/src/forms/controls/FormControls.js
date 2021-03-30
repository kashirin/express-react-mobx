import React from 'react'
import { observer } from 'mobx-react'

export default observer( ({ title = null, onClick }) => {
  
  return <div className="">
  
    <button onClick={onClick}>{title}</button>

    </div>
  
} )