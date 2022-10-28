import React from "react";
import { Link } from 'react-router-dom';


export class Logo extends React.Component{
    render() {
        return
                <Link  to="/logIn"><img src="localAppLogo.png" alt="localApp"></img></Link>
    }
}