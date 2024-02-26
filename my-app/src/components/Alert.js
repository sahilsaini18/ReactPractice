import React from 'react'

function Alert(props) {
const capitalize =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}

  return (
    //it is same as saying if props.alert is not null do this
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {props.alert.type}:{props.alert.msg}
  </div>
  )
}

export default Alert
