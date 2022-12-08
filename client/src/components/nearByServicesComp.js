import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
//import Logo from '../Images/logo192.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export function NearByServicesComp() {
  return (
    <div>
      <div className="componentTitle">
        <h4>Near By Services</h4>
      </div>
      <Row>
        <Col>
          <Link
            to={"/requests/nearByServicesByServiceType/" + "baker"}
            className="businessTypeItem"
          >
            <div>
              <FontAwesomeIcon icon="fa-solid fa-bread-slice" size="3x" />
            </div>
            <div className="businessTypeItemName">Baker</div>
          </Link>
        </Col>
        <Col>
          <Link
            to={"/requests/nearByServicesByServiceType/" + "beautician"}
            className="businessTypeItem"
          >
            <div>
              <FontAwesomeIcon icon="fa-solid fa-spa" size="3x" />
            </div>
            <div className="businessTypeItemName">Spa</div>
          </Link>
        </Col>
        <Col>
          <Link
            to={"/requests/nearByServicesByServiceType/" + "chef"}
            className="businessTypeItem"
          >
            <div>
              <FontAwesomeIcon icon="fa-solid fa-bowl-rice" size="3x" />
            </div>
            <div className="businessTypeItemName">Chef</div>
          </Link>
        </Col>
        
        <Col>
          <Link to={"/requests/nearByServicesByServiceType/" + "cleaner"}
          className="businessTypeItem">
          <div>
              <FontAwesomeIcon icon="fa-solid fa-broom" size="3x" />
            </div>
            <div className="businessTypeItemName">Cleaner</div>
          </Link>
        </Col>
        <Col>
          <Link
            to={"/requests/nearByServicesByServiceType/" + "electrician"}
            className="businessTypeItem"
          >
            <div>
              <FontAwesomeIcon icon="fa-solid fa-plug-circle-bolt" size="3x" />
            </div>
            <div className="businessTypeItemName">Electrician</div>
          </Link>
        </Col>
        <Col>
          <Link to={"/requests/nearByServicesByServiceType/" + "painter"}
          className="businessTypeItem">
          <div>
              <FontAwesomeIcon icon="fa-solid fa-paint-roller" size="3x" />
            </div>
            <div className="businessTypeItemName">Painter</div>
          </Link>
        </Col>
        <Col>
          <Link to={"/requests/nearByServicesByServiceType/" + "plumber"}
          className="businessTypeItem">
          <div>
              <FontAwesomeIcon icon="fa-solid fa-faucet-drip" size="3x" />
            </div>
            <div className="businessTypeItemName">Plumber</div>
          </Link>
        </Col>
        <Col>
        <Link to={"/requests/nearByRequests/"} title="more..">
            <FontAwesomeIcon icon="fa-solid fa-angles-right" size="2x" />
          </Link>
          
        </Col>
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
      </Row>
    </div>
  );
}
