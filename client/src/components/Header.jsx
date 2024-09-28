import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import countries from "./countries"; // Make sure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [active, setActive] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  
  const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
  }

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-between p-4">
        <h3 className="heading font-bold text-2xl">News_Aggregator</h3>
        <ul className={`nav-ul flex gap-6 ${active ? "active" : ""}`}>
          <li><Link className="no-underline font-semibold text-white" to="/" onClick={() => setActive(!active)}>All News</Link></li>
          <li className="dropdown-li">
            <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false); }}>
              Top-Headlines <FontAwesomeIcon icon={faCircleArrowDown} />
            </Link>
            <ul className={`dropdown ${showCategoryDropdown ? "show-dropdown" : ""}`}>
              {category.map((element, index) => (
                <li key={index} onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>
                  <Link to={`/top-headlines/${element}`} className="flex gap-3 capitalize" onClick={() => setActive(!active)}>
                    {element}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown-li">
            <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false); }}>
              Country <FontAwesomeIcon icon={faCircleArrowDown} />
            </Link>
            <ul className={`dropdown ${showCountryDropdown ? "show-dropdown" : ""}`}>
              {countries.map((element, index) => (
                <li key={index} onClick={() => setShowCountryDropdown(!showCountryDropdown)}>
                  <Link to={`/country/${element.iso_2_alpha}`} className="flex gap-3" onClick={() => setActive(!active)}>
                    <img src={element.png} alt={element.countryName} />
                    <span>{element.countryName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link className="no-underline font-semibold text-white" to="#" onClick={toggleTheme}>
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
              </label>
            </Link>
          </li>
        </ul>
        <div className={`ham-burger ${active ? "ham-open" : ""}`} onClick={() => setActive(!active)}>
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
