 import { useState } from "react";
 
 import axios from 'axios';
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
     <form className="signUp" onSubmit={handleSubmit}>
       <h3>Sign Up</h3>
        <div className="userDetails">
          <label className="userInput">First Name:</label>
          <input
            type="firstName1"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            />
        </div>
        <div className="userDetails">
          <label className="userInput">Last Name:</label>
          <input
            type="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            />
        </div>
        <div className="userDetails">
          <div className="email">
            <label className="userInput">Email:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
          </div>
        </div>
        <div className="userDetails">
          <label className="userInput">Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
        </div>
        <div className="userDetails">
          <label className="userInput">Confirm Password:</label>
          <input
            type="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            />
        </div>
        <div className="userDetails">
          <input className="userInput" type="submit" value="Register" />
        </div>
     </form>
     <Footer />
     </>
   );
};
