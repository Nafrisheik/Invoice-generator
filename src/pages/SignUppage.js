import React ,{useState}from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Signup = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [type, setType] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
    
      const handleChange=(evt)=>{
        setFname(evt.target.value );
      }
      const handleChange1=(evt)=>{
        setLname(evt.target.value);
      }
      const handleChange4=(evt)=>{
        setType(evt.target.value);
      }
      const handleChange2=(evt)=>{
        setUserEmail(evt.target.value);
      }
      const handleChange3=(evt)=>{
        setUserPassword(evt.target.value);
      }

      function submitSignup(Event){
      
        let SignupData ={
          firstname:fname,
          lastname:lname,
          type:type,
          email:userEmail,
          password:userPassword
        };
        console.log(SignupData);
        fetch('http://localhost:3000/api/allUsers/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(SignupData),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);    
    // <Redirect to={routes.posts} />
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  Event.preventDefault();
     

    }    
  return (
      <div className="container">
        <h1> Signup for Invoice generator </h1>
          <Form onSubmit={submitSignup}>
          <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="fname">Firstname</Label>
            <Input type="text" name="fname" id="fname" value={fname} onChange={handleChange} placeholder="Enter firstname" />
          </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
            <Label for="lname">Lastname</Label>
            <Input type="text" name="lname" id="lname" value={lname} onChange={handleChange1} placeholder="Enter lastnam" />
          </FormGroup>
        </Col>
      </Row>       
      <FormGroup>
        <Label for="typeSelect">User type</Label>
        <Input type="select" name="select" id="typeSelect" value={type} onChange={handleChange4}>
          <option>Employee</option>
          <option>Admin</option>
          <option>Manager</option>         
        </Input>
      </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" value={userEmail} onChange={handleChange2} placeholder="Enter your email id" />
          </FormGroup>
        
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" value={userPassword} onChange={handleChange3} placeholder="Enter password" />
          </FormGroup>
           
      <Button>Sign Up</Button>
    </Form>
      </div>
    
  );
}

export default Signup;