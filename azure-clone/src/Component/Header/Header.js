import React from "react";
import "./Header.css";
import hamBurger from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/hamBurger.svg";
import azureLogo from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/azureSLogo.svg";
import headerSearchLogo from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/search-line-icon.png"
import menuBar from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/menuBar.svg"
function Header() {
  return (
    <>
      <div>
        {/*mobile-view */}
        <header className="header">
          <div className="header-container">
            <div className="nav-leftSide">
              <img src={hamBurger} alt=""/>
              <span>Azure</span>
            </div>
              <span className="azure-logo-img">
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
        <header className="header-one">
          <div className="header-containerOne">
          <div className="nav-leftSide">
          <span className="azure-logo-img">
              <img src={azureLogo} alt=""/>
              </span>
              <span>Azure</span>
            </div>
            <ul>
              <li>Explore</li>
              <li>Products</li>
              <li>Solution</li>
              <li>Pricing</li>
              <li>Partners</li>
              <li>Resources</li>
            </ul>
          </div>
          <span className="headerSearch-icon">
               <img src={headerSearchLogo} alt=""/>
          </span>
          <nav>
            <span>
              <img src={menuBar} />
            </span>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;

