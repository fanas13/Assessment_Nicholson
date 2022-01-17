import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import Drawer from './Drawer';

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    
  }

  componentWillMount() {
    
  }

  render() {
    // global theme for defining the company colors and font colors 
    const { theme } = this.props
    return(<MuiThemeProvider theme={theme}>
      <Drawer />
    </MuiThemeProvider>)
  }
}

const mapStateToProps = state => {
  return {
    
  }};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
