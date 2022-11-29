import React from 'react';
import { Link } from 'react-router-dom';

export function NearByServices() {
    return (
        <div>
            <Link>
                <img  src="/beautician.png" alt="">beautician</img>
            </Link>
            <Link>
                <img  src="/painter.png" alt="">painter</img>
            </Link>
            <Link>
                <img  src="carpentor.png" alt="">carpentor</img>
            </Link>
            <Link>
                <img  src="baking.png" alt="">baking</img>
            </Link>
        </div>
    );
}

