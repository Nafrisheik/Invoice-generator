import React, { Component, Fragment, useState } from "react";
import {InputField,DropDown} from "./Component/inputField"

// const RootElement = document.querySelector('#root');

const RegisterForm = () => {

  return (
    <Fragment>
      <div className="container">
      <p className="h1 text-center">Register for Invoice Application</p>
      <br></br>
      <br></br>
      <br></br>

      <form onSubmit={mySubmitHandler}>
      <div className="row">
      <div className="col">
      <InputField type={"text"} id="fname" placeholder={"First Name"} />
      </div>
      <div className="col">
      <InputField type={"text"} id="lname" placeholder={"Last Name"} />
      </div>
      </div>

      <div className="form-group">
      <label htmlFor="Email">Email address</label>
      <InputField type={"email"} controlId="Email" placeholder={"Email"} />
      {/* <small id="emailHelp" className="form-text text-muted">Enter your Username</small> */}
      </div>

      <div className="form-group">
      <label htmlFor="Password">Password</label>
      <InputField type={"password"} controlId="Password" placeholder={"Password"} />
      </div>     
       <DropDown/>     
<br></br>
      <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
      </div>
    </Fragment>
  );
  function mySubmitHandler(){
  console.log(document.getElementById("fname").value);
        try {
         let data ={
             firstName : document.getElementById("fname").value,
             lastName : document.getElementById("lname").value,
             email : document.getElementById("Email").value,
             password: document.getElementById("Password").value
         };
         console.log(data.firstName)
        let loginData = fetch("http://localhost:3000/api/allUsers/register",{
             method:"POST",
             body:JSON.stringify(data),
             headers:{
                 "Content-Type":"application/json",
             },
         });
         if(!loginData.ok) throw new Error();
         let loginResult = loginData.json()
         console.log(loginResult);
         let authenticate = loginResult.token;            
         window.location.replace("user.html");
     }
         catch (error) {
            console.log("Something gone wrong");
        }
     }

};

export default RegisterForm;
