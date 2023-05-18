import React from 'react'

export default function Alert(props) {
    
    /**
     * Where props.alert.type = primary, success, warning, danger 
     * */

    /**
     * @return string
     * Convert first latter capital of string Exam- success = Success
     */
    const convertUppercase = (str) =>{
        return str.charAt(0).toUpperCase()+str.slice(1);
    }
  return (
    /**
     * props.alert && :- We are using this because we are passing default value 'null' to alert and setAlert is a object. 
     *  */
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{convertUppercase(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}
