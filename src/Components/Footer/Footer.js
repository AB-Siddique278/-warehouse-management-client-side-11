import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Fruits Basket</h4>
            <h1 className="list-unstyled">
              <li>Dhanmondi 32</li>
              <li>Shukrabad </li>
              <li>Dhaka Bangladesh</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Our features </h4>
            <ui className="list-unstyled">
              <li>Selling Bestfruits</li>
              <li>Formalin free fruit</li>
              <li>Best fruit at low prices</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>OUR ANOTHER WAREHOUSE</h4>
            <ui className="list-unstyled">
              <li>Rice warehouse</li>
              <li>Vegetable warehouse</li>
              <li>Electronics warehouse</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Fruits Basket | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;