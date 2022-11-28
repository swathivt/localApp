 import { useState } from "react";
 
 import axios from 'axios';
 import { Container, Form, Button } from "react-bootstrap";

 import { NavBar } from "../components/sections/navBar.js";
import { Footer } from "../components/sections/footer";

 export const SignUp = () => {

   <img src="localAppLogo" alt="logo"></img>
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const handleSubmit = async (e) => {
     e.preventDefault();

     console.log(firstName, lastName, email, password, confirmPassword);

     // TODO - Validation ??
    const userRegistration = {
         firstName : this.state.firstName,
         lastName : this.state.lastName,
         email : this.state.email,
         password : this.state.password,
         confirmPassword : this.state.confirmPassword
     }

     //Call Backend Endpoint for creating user
     console.log('before....');

     const headers = {
       "Content-Type": "application/json",
     };

     await axios.get('http://localhost:5000/')
     .then(function (response) {
       // handle success
       console.log(response);
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
     .then(function () {
       // always executed
     });
  
     
  
     console.log('TEstiiiii');
     //TODO --
     axios.post('http://localhost:5000/signUp', userRegistration)
         .then(res => console.log(res.data));

     this.setState({
         firstName : '',
         lastName : '',
         email : '',
         password : '',
         confirmPassword : ''

       })

 
   };

   return (
    <>
    <NavBar />
    <h3>Sign Up</h3>
    <Container>
      <Form>
       <Form.Group>
        <Form.Label>First Name:</Form.Label>
        <Form.Control
           type="firstName"
           placeholder="Enter your first name"
        />
       </Form.Group>
       <Form.Group>
          <Form.Label>Last Name:</Form.Label>
            <Form.Control  
            type="lastName"
            placeholder="Enter your last name"
            />
          </Form.Group>
          <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control  
              type="email"
              placeholder="Enter your email address"
              />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control  
            type="password"
            placeholder="Enter your password"
            />
          
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password:</Form.Label>
            <Form.Control  
            type="confirmPassword"
            placeholder="Enter your password again"
            />
          
          </Form.Group>
          <Button variant="success"  type="submit" className="submitButton">
            Create aaccount
          </Button>

      </Form>

    </Container>
    
     <Footer />
     </>
   );
};
