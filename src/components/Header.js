import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './Header.styles';

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.headerText}>Eric Ferrández</Typography>
    </Box>
  );
}

export default Header;
