import React from 'react'
import {withStorageListener} from './withStorageListener'

function ChangeAlert({show,toggleShow}) {
  return (show)?
          <p style = {{marginLeft: '15px;'}}>the todo list is actualized</p>:
          null;
  
}

const ChangeAlertWithStorageLister = withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageLister}