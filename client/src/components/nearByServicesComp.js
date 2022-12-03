import React from 'react';
import { Link } from 'react-router-dom';
//import Logo from '../Images/logo192.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 

export function NearByServicesComp() {


    return (
        <div >
            <h1>Near By Services</h1>
            <Link to={"/services/nearByServicesByServiceType/" + 'plumber'}>
                Plumber
            </Link>
            <Link to={"/services/nearByServices/"}>
                more..
            </Link>

            {/* <Link onClick={() => {
                        handleDeletReq('2');
                      }}>
                Plumber
            </Link> */}
            {/* <Link>
                Plumber
            </Link> 
            <Link>
                Chefs
            </Link> 
            <Link>
                more..
            </Link> */}
            {/* <Link>
                <img  src="/painter.png" alt="painter">painter</img>
            </Link>
            <Link>
                <img  src="carpentor.png" alt="carpentor">carpentor</img>
            </Link>
            <Link>
                <img  src="baking.png" alt="baking">baking</img>
            </Link> */}
        </div>
    );
}

