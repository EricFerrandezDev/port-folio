import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@material-ui/core';
import useStyles from './HeaderAndMenu.styles';

const Menu = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  console.log('pathname', pathname);

  let home = '';
  let about = '';
  let portfolio = '';
  let contact = '';

  switch (pathname) {
    case '/':
     home = 'active';
      break;
    case '/about':
      about = 'active';
      break;
    case '/portfolio':
      portfolio = 'active';
      break;
    case '/contact':
      contact = 'active';
      break;
  }

  return (
    <Box className={classes.menuBox}>
      <ul className="menu">
        <li><Link to="/" className={home}>Home</Link></li>
        <li><Link to="about" className={about}>About</Link></li>
        <li><Link to="portfolio" className={portfolio}>Portfolio</Link></li>
        <li><Link to="contact" className={contact}>Contact</Link></li>
        <li className="slider"></li>
      </ul>
    </Box>
  );
}

export default Menu;
