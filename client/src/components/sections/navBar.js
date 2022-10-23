
import React from 'react';
import { Link } from 'react-router-dom';


export function NavBar() {
  return (
    <div>
      
      <nav>
        <div>
          <Link  to="/signUp">SignUp</Link >
          <Link  to="/logIn">Login</Link >
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