import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './Content.styles';

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Typography variant="body1">Portfolio</Typography>
      </Box>
    </>
  );
}

export default Portfolio;
