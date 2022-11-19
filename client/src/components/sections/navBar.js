import React from "react";
import { Logo } from "./logo.js";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div id="header">
        <div>
          <img className="logo" src="localAppLogo.png" alt="localApp"></img>
        </div>
        <div className="headerItems">
          <Link className="menuItem" to="/signUp">
            SignUp
          </Link>
          <Link className="menuItem" to="/logIn">
            Login
          </Link>
          <Link className="menuItem" to="/user/myAccount">
            MyAccount
          </Link>
          <Link className="menuItem" to="/logout">
            Logout
          </Link>
          <Link className="menuItem" to="/request/create">
          CreateStudent
          </Link>
          <Link className="menuItem" to="/contactus">
            ContactUs
          </Link>
          <Link className="menuItem" to="/secured">
            Secured
          </Link>
          
          
         </div>
    </div>
  );
}

// export class NavBar extends React.Component {
//   render() {
//     const pages = ['SignUp','Login' ];

//     const navLinks = pages.map(page => {
//       return (
//         <li className="selected">
//           <a href={'/' + page}>
//             {page}
//           </a>
//         </li>
//       )
//     });

//     const headerSection = (
//       <div id="header">
//         <div>
//           <ul id="navigation">{navLinks}</ul>
//         </div>
//       </div>
//     );

//     return <nav>{headerSection}</nav>;
//   }
// }
