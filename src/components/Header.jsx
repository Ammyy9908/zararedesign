import React from "react";
import { useHistory } from "react-router-dom";
import "./Header.css";
function Header({ menu, setMenu, search, setSearch, type, root }) {
  const history = useHistory();
  const handleMenu = () => {
    setMenu(!menu);
    setSearch(0);
  };
  const handleSearch = () => {
    setSearch(!search);
    setMenu(0);
  };

  const handleMoveToRoot = () => {
    if (root === "catalog") {
      history.push("/catalog/woman");
    } else if (root === "item") {
      history.push("/item/1");
    } else if (root === "story") {
      history.push("/story/1 ");
    } else {
      history.push(`${root === "home" ? "/" : `/${root}`}`);
    }
  };
  return (
    <header className={`${type && type + "__header"}`}>
      <div className="header_wrapper">
        <div className="header-group1">
          <button onClick={handleMenu}>
            {menu ? (
              <img src="/menu-close.svg" alt="menu-icon" />
            ) : (
              <img src="/zara_menu.svg" alt="" />
            )}
          </button>
          <span>{!menu ? "MENU" : "CLOSE"}</span>
        </div>
        {
          <>
            {!root ? (
              <div className="header-group2" onClick={handleSearch}>
                {!search ? <span>SEARCH</span> : <span> CLOSE</span>}
              </div>
            ) : (
              <div className="header-group2" onClick={handleMoveToRoot}>
                <span> CLOSE</span>
              </div>
            )}
          </>
        }

        <div className="header-group3">
          <div className="header-group-lines">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
          <div className="cart-text">
            <span>CART</span>
            <span className="cart-count">3</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
