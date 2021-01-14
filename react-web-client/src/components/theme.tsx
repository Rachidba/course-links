import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5657ff',
    },
  },
  shape: {
    borderRadius: 4,
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
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
