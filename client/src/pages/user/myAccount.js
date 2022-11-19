import { NavBar } from "../../components/sections/navBar";
import { Footer } from "../../components/sections/footer.js";

import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class MyAccount extends Component {
    render() {
        return (
            <>
            <NavBar />
            <div id='myAccountLinks'>
                <Link className="" >
                    My Preferences
                </Link>
                <Link to="/user/myRequests">
                    My Requests
                </Link>
                <Link >
                    My Events
                </Link>
                <Link >
                    My Services
                </Link>
            </div>
            <Footer />
            </>
        );
    }
}

