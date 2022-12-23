import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

function SecNAV() {
  const cartCount = useSelector((state) => state.basketReducerCart);
  const wishCount = useSelector((state) => state.basketReducerWish);
  const aletler = useSelector((state) => state.aletlerReducer);
  const [filteredItems, setFilteredItems] = useState([]);

  const findData = (e) => {
    if (e.target.value.length) {
      let filteredItems = aletler.filter((a) =>
        a.marka.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredItems(filteredItems);
      window.addEventListener("click", () => {
        document.getElementById("search__input__id__upper").value = ``;
        document.getElementById("search__input__id__mobile").value = ``;
        setFilteredItems([]);
      });
    } else {
      setFilteredItems([]);
    }
  };

  var hideNavMenu = document.getElementById("navbarSupportedContent");

  const closeSearch = (e) => {
    setFilteredItems([]);
    document.getElementById(
      "search__input__id__upper"
    ).value = `${e.marka} ${e.model}`;
    document.getElementById(
      "search__input__id__mobile"
    ).value = `${e.marka} ${e.model}`;
    hideNavMenu.classList.remove("show");
  };

  const closeSearchMobile = () => {
    setFilteredItems([]);
    if (hideNavMenu) {
      hideNavMenu.classList.remove("show");
    }
  };

  return (
    <div>
      <section className="S2-Nav">
        <nav className="S2-Navbar dflex-768">
          <div className="w74">
            <div className="dflex sbetween">
              <div>
                <NavLink className="Logo" to="/">
                  HRMbuild
                </NavLink>
              </div>
              <div className="search__container dflex full-center">
                <input
                  className="search__input"
                  id="search__input__id__upper"
                  onChange={findData}
                  type="text"
                  placeholder="Axtarış"
                />
                {filteredItems.length > 0 ? (
                  <div className="search__pc__upper">
                    {filteredItems.map((a, key) => (
                      <div key={key} className="search__pc__upper__li">
                        <Link
                          onClick={(e) => closeSearch(a)}
                          to={`/butun_aletler/${a.id}`}
                        >
                          <div>
                            {a.marka} - {a.model}
                          </div>
                          <div>${a.price}</div>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="Navbar-pc-right dflex full-center">
                <div className="col-4">
                  <NavLink activeClassName="activeNav" to="/register">
                    <img src="svg_proekt/02navbar/sign-up.svg" alt="" />
                    Profil
                  </NavLink>
                </div>
                <div className="col-4 wishz0r">
                  <NavLink activeClassName="activeNav" to="/wishlist">
                    <img src="svg_proekt/02navbar/heart.svg" alt="" />
                    İstəklər
                  </NavLink>
                  {wishCount.length > 0 ? (
                    <div className="wish-Icon">{wishCount.length}</div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="col-4 basketz0r">
                  <NavLink activeClassName="activeNav" to="/basket">
                    <img src="svg_proekt/02navbar/bag.svg" alt="" />
                    Səbət
                  </NavLink>
                  {cartCount.length > 0 ? (
                    <div className="wish-Icon">{cartCount.length}</div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
          <NavLink className="Logo navbar-brand" exact to="/">
            HRMbuild
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon wishz0r">
              {wishCount.length + cartCount.length > 0 ? (
                <div className="wish-Icon-mob-nav">
                  {wishCount.length + cartCount.length}
                </div>
              ) : (
                ""
              )}
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className=" my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                id="search__input__id__mobile"
                onChange={findData}
                placeholder="Search"
                aria-label="Search"
              />
              {filteredItems.length > 0 ? (
                <div className="search__mobile__upper">
                  {filteredItems.map((a, key) => (
                    <div key={key} className="search__pc__upper__li">
                      <Link
                        onClick={(e) => closeSearch(a)}
                        to={`/butun_aletler/${a.id}`}
                      >
                        <div>
                          {a.marka} - {a.model}
                        </div>
                        <div>${a.price}</div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : null}
            </form>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link
                  onClick={(e) => closeSearchMobile()}
                  to="/register"
                  className="nav-link"
                >
                  <span>Profil</span>
                </Link>
              </li>
              <li className="nav-item wishz0r">
                <Link
                  onClick={(e) => closeSearchMobile()}
                  to="/wishlist"
                  className="nav-link"
                >
                  İstəklər
                </Link>
                {wishCount.length > 0 ? (
                  <div className="wish-Icon-mob">{wishCount.length}</div>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item basketz0r">
                <Link
                  onClick={(e) => closeSearchMobile()}
                  to="/basket"
                  className="nav-link"
                >
                  Səbət
                </Link>
                {cartCount.length > 0 ? (
                  <div className="wish-Icon-mob">{cartCount.length}</div>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default SecNAV;
