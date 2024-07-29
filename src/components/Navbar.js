import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useGlobals } from "../Globals";

// Styled Components
const NavBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background: ${(props) => props.PrimaryColour};
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1px;
  align-items: center;
  font-size: 1.2rem;
  font-family: ${(props) => props.fontFamily};

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1px 2fr 1fr;
  }
`;

const NavPhone = styled.div`
  z-index: 100;
  background: ${(props) => props.PrimaryColour};
  height: 60px;
  color: white;
  font-size: 1.2rem;
  transition: font-size 0.1s ease;
  font-family: ${(props) => props.fontFamily};
`;

const NavPhoneText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-family: ${(props) => props.fontFamily};

  &:hover {
    font-size: calc(100% + 50%);
  }
`;

const NavbarLogo = styled.div`
  color: #fff;
  cursor: pointer;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  background: ${props => props.PrimaryColour};
  font-family: ${(props) => props.fontFamily};

  img {
    margin-top: 7px;
    max-height: 56px;
    max-width: 100%;
    object-fit: cover;
  }
`;

const NavbarContainer = styled.nav`
  grid-column: 2;
  z-index: 100;
  background: ${props => props.PrimaryColour};
  height: 60px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  font-family: ${(props) => props.fontFamily};
`;

const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    background-color: ${props => props.PrimaryColour};
    font-family: ${(props) => props.fontFamily};
  }
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  justify-content: center;
  margin-right: 2rem;
  font-family: ${(props) => props.fontFamily};

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 60px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;

    &.active {
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
    }
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 60px;
  font-family: ${(props) => props.fontFamily};
`;

const NavLinks = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-family: ${(props) => props.fontFamily};

  &:hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      background-color: #1888ff;
      border-radius: 0;
    }
  }
`;

const PhoneLink = styled.a`
  font-family: ${props => props.globalFont};
  text-decoration: none;
  color: white;
  padding-left: 20px;
  font-size: 1.2rem;

  @media screen and (max-width: 960px) {
    font-size: clamp(1.2rem, 5vw, 2.7rem)
  }
`;

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const {
    GlobalFont, PrimaryColour
  } = useGlobals();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const location = useLocation();

  const handleHomeClick = (event) => {
    if (location.pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      closeMobileMenu();
    }
  };

  return (
    <NavBackground fontFamily={GlobalFont} PrimaryColour={PrimaryColour}>
      <NavbarLogo fontFamily={GlobalFont} PrimaryColour={PrimaryColour}>
        <Link to='/' onClick={handleHomeClick} className="home-linkN">
          <img src={logo} alt="Your Logo" className="navbar-logo" />
        </Link>
      </NavbarLogo>

      <NavbarContainer fontFamily={GlobalFont} PrimaryColour={PrimaryColour}>
        <NavMenu className={click ? 'active' : ''} fontFamily={GlobalFont}>
          <NavItem fontFamily={GlobalFont}>
            <NavLinks to='/' onClick={handleHomeClick} fontFamily={GlobalFont} className="home-linkN2">
              Home
            </NavLinks>
          </NavItem>
          <NavItem fontFamily={GlobalFont} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLinks to='/services' onClick={closeMobileMenu} fontFamily={GlobalFont}>
              Services <i className='fas fa-caret-down' />
            </NavLinks>
            {dropdown && <Dropdown />}
          </NavItem>
          <NavItem fontFamily={GlobalFont}>
            <NavLinks to='/contact-us' onClick={closeMobileMenu} fontFamily={GlobalFont}>
              Contact Us
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>

      <NavPhone fontFamily={GlobalFont} PrimaryColour={PrimaryColour}>
        <NavPhoneText fontFamily={GlobalFont}>
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          <PhoneLink href="tel:0412123456" globalFont={GlobalFont}>0412 123 456</PhoneLink>
        </NavPhoneText>
      </NavPhone>

      <MenuIcon onClick={handleClick} PrimaryColour={PrimaryColour}>
        <FontAwesomeIcon icon={click ? faTimes : faBars} />
      </MenuIcon>
    </NavBackground>
  );
}

export default Navbar;
