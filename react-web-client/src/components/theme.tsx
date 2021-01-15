import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5657ff',
    },
  },
  shape: {
    borderRadius: 8,
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        padding: '12px',
      },
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary',
    },
    MuiTextField: {
      variant: 'outlined',
    },
  },
});

export default theme;
