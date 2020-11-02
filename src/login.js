import React, { Fragment, useState } from "react";
import {InputField} from "./Component/inputField"

const Login=()=>{
    return(
    <Fragment>
    <div className="container">
    <p className="h1 text-center">Register for Invoice Application</p>
    <br></br>
    <br></br>
    <br></br>

    <form onSubmit={mySubmitHandler}>    
    <div className="form-group">
    <label htmlFor="Email">Email address</label>
    <InputField type={"email"} controlId="Email" placeholder={"Email"} />
    {/* <small id="emailHelp" className="form-text text-muted">Enter your Username</small> */}
    </div>

    <div className="form-group">
    <label htmlFor="Password">Password</label>
    <InputField type={"password"} controlId="Password" placeholder={"Password"} />
    </div>     
<br></br>
    <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
    </div>
  </Fragment>
);
function mySubmitHandler(){

}

}

export default Login;

