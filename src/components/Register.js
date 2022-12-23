import React from "react";
import "../css/Register.css";

function Register() {
  return (
    <div className="dflex jc-center">
      <div className="w74">
        <div className="register-container dflex ai-center jc-center">
          <input type="text" placeholder="Profil" id="profileinput" />
          <input type="text" placeholder="Parol" id="passwordinput" />
          <button>Daxil ol</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
