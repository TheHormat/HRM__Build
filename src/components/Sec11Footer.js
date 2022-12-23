import React from "react";
import { Link } from "react-router-dom";

function Sec11Footer() {
  return (
    <div>
      <section className="S11-Footer">
        <footer className="dflex jc-center">
          <div className="w74">
            <div className="compardion dflex-1024">
              <div className="footer-daxili dflex">
                <div className="footer-birinci w-50">
                  <ul>
                    <li>
                      <p>ƏLAQƏ</p>
                    </li>
                    <br />
                    <li>
                      <p>hemidovhormet2@gmail.com</p>
                    </li>
                    <li>
                      <p>+994 70 494 91 11</p>
                    </li>
                    <br />
                    <li>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        id="teleqram"
                        href="https://t.me/Hormat"
                      >
                        <i className="fab fa-telegram-plane"></i>&nbsp;İsmarıc
                        göndər
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-uchuncu w-25">
                  <h4>Şirkət</h4>
                  <br />
                  <ul>
                    <li>
                      <Link to={`/about_us`}>Bizim haqda</Link>
                    </li>
                    <li>
                      <Link to={`/terms_of_use`}>Qaydalar</Link>
                    </li>
                    <li>
                      <Link to={`/customer_service`}>Müştəri xidmətləri</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-dorduncu w-25">
                  <h4>Kömək</h4>
                  <br />
                  <ul>
                    <li>
                      <Link to={`/faq`}>Ə.Ç.V.S</Link>
                    </li>
                    <li>
                      <Link to={`/delivery`}>Çatdırılma</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <footer id="accordion">
          <div className="card">
            <div className="card-header" id="headingZero">
              <h5 className="mb-0">
                <button
                  className="expandable-footer-buttons btn btn-link text-dark"
                  data-toggle="collapse"
                  data-target="#collapseZero"
                  aria-expanded="true"
                  aria-controls="collapseZero"
                >
                  Əlaqə
                </button>
              </h5>
            </div>
            <div
              id="collapseZero"
              className="collapse"
              aria-labelledby="headingZero"
              data-parent="#accordion"
            >
              <div className="card-body">
                <ul>
                  <br />
                  <li>
                    &nbsp;
                    <a className="kichik-a" rel="noreferrer" href="#mail">
                      hemidovhormet2@gmail.com
                    </a>
                  </li>
                  <li>
                    &nbsp;
                    <a className="kichik-a" rel="noreferrer" href="#call">
                      +994 70 494 91 11
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="expandable-footer-buttons btn btn-link collapsed text-dark"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Şirkət & Kömək
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body">
                <ul>
                  <li>
                    <Link to={`/about_us`}>Bizim haqda</Link>
                  </li>
                  <li>
                    <Link to={`/customer_service`}>Müştəri xidmətləri</Link>
                  </li>
                  <li>
                    <Link to={`/terms_of_use`}>Qaydalar</Link>
                  </li>
                  <li>
                    <Link to={`/delivery`}>Çatdırılma</Link>
                  </li>
                  <li>
                    <Link to={`/faq`}>Ə.Ç.V.S</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Sec11Footer;
