import React from "react";
import "./Header.css";
import hamBurger from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/hamBurger.svg";
import azureLogo from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/azureSLogo.svg";
import headerSearchLogo from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/search-line-icon.png"

function Header() {
  return (
    <>
      <div>
        {/*mobile-view */}
        <header>
          <div className="header-container">
            <div className="nav-leftSide">
              <img src={hamBurger} alt=""/>
              <span>Azure</span>
            </div>
              <span className="">
              <img src={azureLogo} alt=""/>
              </span>
            <div className="nav-rightSide">
              <span className="headerSearch-icon">
               <img src={headerSearchLogo} alt=""/>
              </span>
              <div className="azure-signSection">
                <span>Sign In</span>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;

