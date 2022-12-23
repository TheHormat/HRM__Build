import React from "react";
import { Link } from "react-router-dom";

function SecOne() {
  return (
    <div>
      <section className="S1-Green dflex-1024">
        <div className="w74 dflex sbetween">
          <div className="S1-Green-Left dflex ai-center">
            <div className="telefon"></div>
            <div>
              <h4>+994 70 494 91 11</h4>
            </div>
          </div>
          <div className="S1-Green-Right dflex ai-center">
            <div className="S1-Green-Right-First-Link">
              <Link to={`/terms_of_use`}>Qaydalar</Link>
            </div>
            <div className="S1-Green-Right-Second-Link">
              <Link to="/faq">Ə.Ç.V.S</Link>
            </div>
            <div className="S1-Green-Right-Last-Link">
              <Link to={`/customer_service`}>Müştəri xidməti</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecOne;
