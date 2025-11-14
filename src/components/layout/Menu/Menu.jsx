import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


import './Menu.css';
import SubMenu from './SubMenu';

const menuData = [
  {
    title: 'Admin Prendas',
    path: '#',
    subNav: [
      { title: 'Clothing', path: '/clothing' },
      { title: 'Type Clothing', path: '/type-clothing' },
      { title: 'Category', path: '/category' },
      { title: 'Design', path: '/master-design' },
      { title: 'Design Clothing', path: '/design-clothing' },
      { title: 'Product', path: '/product' },
    ],
  },
  {
    title: 'Users / providers',
    path: '#',
    subNav: [
      { title: 'Provider', path: '/provider' },
      { title: 'User', path: '/user' },
      { title: 'Role', path: '/role' },
      { title: 'User Roles', path: '/user-role' },
    ],
  },
  {
    title: 'Admin Maestros',
    path: '#',
    subNav: [
      { title: 'Year Production', path: '/year-production' },
      { title: 'Season', path: '/season' },
      { title: 'Collection', path: '/collection' },
      { title: 'Production type', path: '/production-type' },
    ],
  },
  {
    title: 'Logs App',
    path: '#',
    subNav: [
      { title: 'Logs', path: '/logs' },
    ],
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </div>        
        <NavLink to="/" className="logo-text-link" onClick={closeMenu}>
          <h1 className="logo-text">Two Six CMS</h1>
        </NavLink>
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/src/assets/logo.png" alt="Logo" className="logo-image" />
        </NavLink>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {menuData.map((item, index) => (
            <SubMenu item={item} key={index} closeMenu={closeMenu} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;