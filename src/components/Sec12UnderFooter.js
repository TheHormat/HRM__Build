import React from "react";

function Sec12UnderFooter() {
  return (
    <div className="S12-Under-Footer dflex-1024">
      <div className="dflex full-center w-100">
        <div className="dflex sbetween w74">
          <div>
            <div>
              &copy; 2021. Bütün hüquqlar qorunmur. Veb səhifə{" "}
              <span>Hörmət Həmidov</span> tərəfindən yaradılmışdır
            </div>
          </div>
          <div className="dflex full-center">
            <div className="sonlink">
              <a
                className="instagram"
                rel="noreferrer"
                href="https://www.instagram.com/_hamidovh_/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="sonlink">
              <a
                className="facebook"
                rel="noreferrer"
                href="https://www.facebook.com/hormat.hamidov/"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="sonlink">
              <a
                className="telegram"
                rel="noreferrer"
                href="https://t.me/Hormat"
                target="_blank"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec12UnderFooter;
