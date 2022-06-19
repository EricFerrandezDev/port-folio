import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './Content.styles';

const Contact = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Typography variant="body1">Contact</Typography>
      </Box>
    </>
  );
}

export default Contact;
