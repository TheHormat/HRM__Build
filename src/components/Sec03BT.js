import React from "react";
import { NavLink } from "react-router-dom";

function Sec03BT() {
  return (
    <div>
      <section className="S3-Bagtypes dflex full-center">
        <div className="Bagtypes dflex ai-center w74">
          <NavLink activeClassName="activeNav" to="/butun_aletler">
            Bütün alətlər
          </NavLink>
          <NavLink activeClassName="activeNav" to="/destler">
            Dəstlər
          </NavLink>
          <NavLink activeClassName="activeNav" to="/elektrik_aletler">
            Elektrik alətlər
          </NavLink>
          <NavLink activeClassName="activeNav" to="/olchu_aletleri">
            Ölçü alətləri
          </NavLink>
          <NavLink activeClassName="activeNav" to="/pnevmo_aletler">
            Pnevmo alətlər
          </NavLink>
          <NavLink activeClassName="activeNav" to="/el_aletleri">
            Əl alətləri
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Sec03BT;
