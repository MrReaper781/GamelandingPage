import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  // Set up the scroll event listener
  window.addEventListener('scroll', changeBackground);

  return (
    <Nav active={nav}>
      <Logo to="home" smooth={true} duration={250}>GAMEONIX</Logo>
      <MenuButton
        type="checkbox"
        id="menu-btn"
        checked={isMenuOpen}
        onChange={() => setIsMenuOpen(!isMenuOpen)}
      />
      <MenuLabel htmlFor="menu-btn">
        <NavIcon />
        <NavIcon />
        <NavIcon />
      </MenuLabel>
      <Menu isOpen={isMenuOpen}>
        <MenuItem><NavLink to="home" smooth={true} duration={250}>Home</NavLink></MenuItem>
        <MenuItem><NavLink to="features" smooth={true} duration={500}>Features</NavLink></MenuItem>
        <MenuItem><NavLink to="about" smooth={true} duration={500}>About Us</NavLink></MenuItem>
        <MenuItem><NavLink to="contact" smooth={true} duration={500}>Contact</NavLink></MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: ${({ active }) => (active ? 'black' : 'black')};
  transition: 0.6s ease-in-out;
  box-shadow: ${({ active }) => (active ? '5px 10px 30px rgba(0, 0, 0, 0.157)' : 'none')};
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

const MenuButton = styled.input`
  display: none;
`;

const MenuLabel = styled.label`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavIcon = styled.span`
  width: 25px;
  height: 2px;
  background-color: white;
  margin: 5px;
  display: block;
  transition: 0.4s;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: black;
    padding: 1rem;
  }
`;

const MenuItem = styled.li`
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  font-family: 'Lato';
  height: 40px;
  line-height: 43px;
  margin: 3px;
  padding: 0px 22px;
  display: flex;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 1px;
  border-radius: 3px;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: red;
    color: #ffffff;
    box-shadow: 5px 10px 30px darkred;
    transition: all ease 0.2s;
  }
`;

export default Navbar;
