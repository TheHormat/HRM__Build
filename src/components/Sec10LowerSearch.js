import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

function Sec10LowerSearch() {
  const aletler = useSelector((state) => state.aletlerReducer);
  const [filteredItems, setFilteredItems] = useState([]);

  const findData = (e) => {
    if (e.target.value.length) {
      let filteredItems = aletler.filter((a) =>
        a.marka.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredItems(filteredItems);
      window.addEventListener("click", () => {
        document.getElementById("search__input__id__lower").value = "";
        setFilteredItems([]);
      });
    } else {
      setFilteredItems([]);
    }
  };
  const closeSearch = (e) => {
    setFilteredItems([]);
    document.getElementById(
      "search__input__id__lower"
    ).value = `${e.marka} ${e.model}`;
  };

  return (
    <div>
      <section className="S10-Snobella-Search dflex-1024 full-center">
        <div className="w74 dflex sbetween">
          <div>
            <NavLink className="Logo" to="/">
              HRMbuild
            </NavLink>
          </div>
          <div className="search__container dflex full-center w-50">
            <input
              className="search__input search__input__lower"
              id="search__input__id__lower"
              onChange={findData}
              type="text"
              placeholder="Axtarış"
            />
            {filteredItems.length > 0 ? (
              <div className="search__pc__lower">
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
        </div>
      </section>
    </div>
  );
}

export default Sec10LowerSearch;
