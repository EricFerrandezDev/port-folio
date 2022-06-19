import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './HeaderAndMenu.styles';
import Menu from './Menu';

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.headerText}>Eric Ferrández</Typography>
      </Box>
      <Menu />
    </>
  );
}

export default Header;
