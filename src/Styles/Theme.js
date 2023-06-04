import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1d3557'
    },
    tertiary: {
      main: '#f1faee'
    }
  },
});

export default responsiveFontSizes(theme);