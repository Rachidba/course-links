import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuItemClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">Logo</h1>
      <div className="menu-icon" onClick={handleMenuItemClick}>
        {isMenuOpen ? (
          <CloseIcon style={{ fontSize: 40 }} />
        ) : (
          <MenuIcon style={{ fontSize: 40 }} />
        )}
      </div>
      <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
        <li>
          <Button disableRipple>Try for free</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
