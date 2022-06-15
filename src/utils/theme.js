const getTheme = () => {
  return {
    typography: {
      fontFamily: [
        'Nunito',
        'sans-serif',
      ].join(','),
      body1: {
        fontSize: '40px',
        fontWeight: 600,
        color: 'lightblue',
      },
      body: {
        fontSize: '12px',
        fontWeight: 400,
        color: '#FFFFFF',
      },
    },
  };
};

export default getTheme;
