import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './Content.styles';

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Typography variant="body1">Home</Typography>
      </Box>
    </>
  );
}

export default Home;
