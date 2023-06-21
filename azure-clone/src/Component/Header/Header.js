import React from "react";
import "./Header.css";
import hamBurger from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/hamBurger.svg";
import azureLogo from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/azureSLogo.svg";
import headerSearchLogo from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/search-line-icon.png"
import menuBar from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/menuBar.svg"
import downAngle from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/angle-down.png"
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
              <li>Explore<img src={downAngle} width="6px" alt=""/></li>
              <li>Products<img src={downAngle} width="6px" alt=""/></li>
              <li>Solution<img src={downAngle} width="6px" alt=""/></li>
              <li>Pricing<img src={downAngle} width="6px" alt=""/></li>
              <li>Partners<img src={downAngle} width="6px" alt=""/></li>
              <li>Resources<img src={downAngle} width="6px" alt=""/></li>
            </ul>
          </div>
          <div className="right-nav">
          <span className="headerSearch-icon">
              <input placeholder="Search" />
               <img src={headerSearchLogo} alt=""/>
          </span>
          <nav>
            <span className="nav-menuBar">
              <img src={menuBar} alt=""/>
            </span>
            <div className="right-nav-section">
            <ul>
              <li>Learn</li>
              <li>Support</li>
              <li>Contact Sales</li>
              <li className="focusText">Free account</li>
            </ul>
            <div className="azure-signSection">
                <span>Sign In</span>
              </div>
            </div>
          </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;

