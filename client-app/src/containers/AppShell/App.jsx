import { MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountsList from '../../routes/FeatureRoutes/Dashboard/AccountList';
import Drawer from './Drawer';

class App extends Component {
  componentWillReceiveProps(nextProps) {
    
  }

  componentWillMount() {
    
  }

  render() {
    // global theme for defining the company colors and font colors 
    const { theme } = this.props
    return(<MuiThemeProvider theme={theme}>
      <Drawer />
      <AccountsList />
    </MuiThemeProvider>)
  }
}

const mapStateToProps = state => {
  return {
    
  }};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
