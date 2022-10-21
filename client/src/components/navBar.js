
import React from 'react';


export class NavBar extends React.Component {
  render() {
    const pages = ['registration','login' ];

    const navLinks = pages.map(page => {
      return (
        <li className="selected">
          <a href={'/' + page}>
            {page}
          </a>
        </li>
      )
    });

    const headerSection = (
      <div id="header">
        <div>
          <ul id="navigation">{navLinks}</ul>
        </div>
      </div>
    );

    return <nav>{headerSection}</nav>;
  }
}