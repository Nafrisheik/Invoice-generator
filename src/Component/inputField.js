import { event } from "jquery";
import React, { Fragment, useState } from "react";
const InputField = (props) => {
    const [inputValue,setInputValue]=useState("");

    const updateField =(event)=>{
        setInputValue(event.target.value);
    };
    
  return (
    <Fragment>
        <input type={props.type} className="form-control" onChange={updateField} value={inputValue} placeholder={props.placeholder}></input>
    </Fragment>
  )
}


const DropDown =()=>{
    const [inputValue,setInputValue]=useState("");
    const updateField =(event)=>{
        setInputValue(event.target.value);
    };
    
  return (
    <Fragment>
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" value={inputValue} onChange={updateField} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select User Type
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Employee</a>
    <a className="dropdown-item" href="#">Manager</a>
    <a className="dropdown-item" href="#">Admin</a>
  </div>
</div>
    </Fragment>
  )
}
export {InputField,DropDown};