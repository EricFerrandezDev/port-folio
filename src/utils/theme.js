const getTheme = () => {
  return {
    typography: {
      fontSize: 12,
      color: '#FFFFFF',
      fontFamily: [
        'Nunito',
        'sans-serif',
      ].join(','),
      body1: {
        fontSize: '14px',
        fontWeight: 400,
        color: '#FFFFFF',
      },
      body2: {
        fontSize: '12px',
        fontWeight: 400,
        color: '#FFFFFF',
      },
    },
  };
};

export default getTheme;
