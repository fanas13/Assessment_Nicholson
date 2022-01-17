import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import AccountsList from '../../routes/FeatureRoutes/Dashboard/AccountList';
import Drawer from './Drawer';

class App extends Component {
  render() {
    // global theme for defining the company colors and font colors 
    const { theme } = this.props
    return(<MuiThemeProvider theme={theme}>
      <Drawer />
      <AccountsList />
    </MuiThemeProvider>)
  }
}

export default App;
