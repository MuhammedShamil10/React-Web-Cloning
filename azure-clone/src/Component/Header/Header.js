import React from "react";
import "./Header.css";
import hamBurger from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/hamBurger.svg";
import azureLogo from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/azureSLogo.svg";
import headerSearchLogo from "/home/sha/Documents/React Web Clone/azure-clone/src/Component/assets/img/search-line-icon.png"
// import { MdOutlineKeyboardArrowDown } from "react-icons/fa";
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
              <li>Explore<MdOutlineKeyboardArrowDown /></li>
              <li>Products<MdOutlineKeyboardArrowDown /></li>
              <li>Solution<MdOutlineKeyboardArrowDown /></li>
              <li>Pricing<MdOutlineKeyboardArrowDown /></li>
              <li>Partners<MdOutlineKeyboardArrowDown /></li>
              <li>Resources<MdOutlineKeyboardArrowDown /></li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;

