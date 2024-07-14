import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import { useGlobals } from '../Globals'

function Dropdown() {
  const {
    GlobalFont, setGlobalFont,
    PrimaryColour, setPrimaryColour,
    SecondaryColour, setSecondaryColour,
    TertiaryColour, setTertiaryColour
  } = useGlobals();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        style={{ fontFamily: GlobalFont }} 
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} style={{ fontFamily: GlobalFont }}> 
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
                style={{ fontFamily: GlobalFont }} 
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
