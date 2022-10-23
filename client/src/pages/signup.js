import { useState} from "react";
  
export const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(firstName,lastName,email,password,confirmPassword);

        // TODO - Validation ??

        const userRegistration = {
            firstName : this.firstName,
            lastName : this.lastName,
            email : this.email,
            password : this.password,
            confirmPassword : this.confirmPassword
        }

        // Call Backend Endpoint for creating user

        // TODO -- 
        // axios.post('http://localhost:4000/signUp', userRegistration)
        //     .then(res => console.log(res.data));

        this.firstName = this.lastName = this.email = this.password = this.confirmPassword = '';
    }

    return (
        <form className="signUp" onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <label>First Name:</label>
            <input type="firstName" 
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
             />

             <label>Last Name:</label>
             <input type="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
            />



            <label>Email:</label>
            <input type="email" 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
             />

             
             <label>Password:</label>
             <input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
            />

             <label>Confirm Password:</label>
             <input type="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
            />


            <input type="submit" value="Register" />
        </form>
    )
}

