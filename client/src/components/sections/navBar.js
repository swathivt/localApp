
import React from 'react';
import { Logo } from './logo.js';
import { Link } from 'react-router-dom';


export function NavBar() {
  return (
    <div>
      
      <nav>
        <div >
          <img className = "logo" src="localAppLogo.png" alt="localApp" ></img>
        </div>
        <div className='navLinks'>
          <Link  to="/signUp">SignUp</Link >
          <Link  to="/logIn">Login</Link >
          <Link  to="/logout">Logout</Link >
          <Link  to="/contactus">ContactUs</Link >

        </div>
      </nav>

      
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