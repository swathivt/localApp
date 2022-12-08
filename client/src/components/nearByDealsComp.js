import React from "react";
import { Link } from "react-router-dom";
import { Button,Container, Row, Col } from "react-bootstrap";
//import Logo from '../Images/logo192.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

export function NearByRequestsComp() {
  return (
    <div>
      {/* <div className="pageTitle">
        <h1>Near By Requests</h1>
      </div> */}
      <Row>
        <Col>
          <Link to={"/requests/nearByDealsByDealType/" + "baker"}>
          <Button className="businessType"  variant="flat">Baker</Button>
          </Link>
        </Col>
        <Col>
          <Link to={"/requests/nearByRequestsByRequestType/" + "beautician"}>
          <Button className="businessType"  variant="flat">Beautician</Button>
          </Link>
        </Col>
        <Col>
          <Link to={"/requests/nearByRequestsByRequestType/" + "chef"}>
          <Button className="businessType"  variant="flat">Chef</Button>
          </Link>
        </Col>
        <Col>
          <Link to={"/requests/nearByRequestsByRequestType/" + "cleaner"}>
          <Button className="businessType"  variant="flat">Cleaner</Button>
          </Link>
        </Col>
        <Col>
          <Link to={"/requests/nearByRequestsByRequestType/" + "painter"}>
          <Button className="businessType"  variant="flat">Painter</Button>
          </Link>
        </Col>
        <Col>
          <Link to={"/requests/nearByRequestsByRequestType/" + "plumber"}>
          <Button className="businessType"  variant="flat">Plumber</Button>
          </Link>
        </Col>
        <Col>
          <Link to={"/requests/nearByRequests/"}>          
          <Button className="businessType"  variant="flat">more...</Button></Link>
        </Col>
        {/* <Link onClick={() => {
                        handleDeletReq('2');
                      }}>
                Plumber
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
