export const theme = {
  breakpoints: ['768px', '1024px'],

  fonts: {
    Poppins: "'Poppins', sans-serif",
  },

  fontSizes: [
    '10px', //0
    '12px', //1
    '14px', //2
    '16px', //3
    '18px', //4
    '24px', //5
    '28px', //6
    '44px', //7
    '48px', //8
    '100px', //9
    '32px', //10
  ],

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  color: {
    gray: {
      primary: '#AAAAAA',
      footer: '#4C4C4C',
    },

    red: {
      1: '#C62828',
    },

    black: {
      overlay: 'rgba(0, 0, 0, 0.5)',
      text: '#191919',
    },

    white: {
      1: '#FFF',
      2: '#E6E6E6',
      text: '#E6E6E6',
      bg_body: '#999999',
    },
  },
};

theme.breakpoints.tablet = theme.breakpoints[0];
theme.breakpoints.desktop = theme.breakpoints[1];
