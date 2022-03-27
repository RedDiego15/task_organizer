import React from 'react'

function withStorageListener(WrapedComponent) {
  return function WrappedComponentWithStorageListener(props){

    const [storageChange,setStorageChange] = React.useState(false);

    const sincronizeTodos = (e)=>{
      console.log(e)
        if(e.key==='TODOS_V1'){
          localStorage.setItem('TODOS_V1',e.newValue);
          setStorageChange(true);
          props.setSincronizedItem(storageChange)
        }
        
    }
    
    React.useEffect(()=>{
        window.addEventListener('storage', sincronizeTodos)
        return () => {
            window.removeEventListener('storage', sincronizeTodos)
        }

    },[])
    

    return (
        <WrapedComponent 
        show={storageChange}
        toggleShow={setStorageChange}
        >

        </WrapedComponent>
    )
  }
 
}

export {withStorageListener}