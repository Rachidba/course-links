import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const BootstrapButton = withStyles({
  root: {
    backgroundColor: '#5657ff',
    borderRadius: '8px',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '1rem',
    marginTop: '0',
    '&:hover': {
      backgroundColor: '#4949EB',
    },
  },
})(Button);
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuItemClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">Curriculum</h1>
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
          <BootstrapButton variant="contained" color="primary" disableRipple>
            Register
          </BootstrapButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
