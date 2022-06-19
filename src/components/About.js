import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './Content.styles';

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Typography variant="body1">About</Typography>
      </Box>
    </>
  );
}

export default About;
