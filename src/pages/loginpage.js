import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from "react-router-dom";
import routes from "../routes"

const Login = (props) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

         const handleChange=(evt)=>{
          setUserEmail(evt.target.value );
      }
      const handleChange1=(evt)=>{
        setUserPassword(evt.target.value);
    }
    console.log(userEmail);
    console.log(userPassword);
       
    function SubmitLogin(Event){
      
        let loginData ={
          email:userEmail,
          password:userPassword
        };
        console.log(loginData)
        fetch('http://localhost:3000/api/allUsers/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginData),
  })
  .then(response => response.json())
  .then(data => {
    // if(!response.ok) throw new Error();
    console.log('Success:', data);
    let authenticate = data.token;
    console.log(authenticate);
    localStorage.setItem('token',authenticate);
    <Redirect to={routes.posts} />
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  Event.preventDefault();
     

    }    

  return (
     <div className="container"> 
     <h1> Login to use Invoice generator </h1>
      <Form onSubmit={SubmitLogin}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" value={userEmail} onChange={handleChange} id="exampleEmail" placeholder="Enter email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" value={userPassword} onChange={handleChange1} id="examplePassword" placeholder="Enter password" />
      </FormGroup>     
      <Button type="submit">Submit</Button>
    </Form><br></br>
    <Button color="secondary" href="/pages/SignUppage">Sign up</Button>
    <br></br><br></br>
    <Button color="primary" href="/pages/forgotPass">Forgot Password</Button>
    </div>      
    
  );
    
}
export default Login;
  