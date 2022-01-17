import { createTheme } from '@material-ui/core/styles';
const theme = createTheme({
  palette: {
    secondary: {
      main: '#169FA9',
      light: '#fbd1da',
      yellow: '#FFC727',
      orange: '#F05322',
      blue: '#00ADEF',
      turquoise: '#80A1B7',
      green: '#78BC42',
      lightBlue: '#f2fbfe'
    },
    error: {
      main: '#ea1946'
    }
  }
});

// Convenience to view composed theme in console

export default theme;