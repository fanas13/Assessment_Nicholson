import Grid from '@material-ui/core/Grid';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountsList extends Component {
  componentWillReceiveProps(nextProps) {
    
  }

  componentWillMount() {
    
  }

  render() {
    return(
      <Grid item md={12} container spacing={0} alignItems="center" justifyContent="center" direction="column" >
          <Grid md={6} container alignItems="center" justifyContent="center" item style={{ backgroundColor: 'yellow' }}> 
            tst
          </Grid>
      </Grid> 

    )
  }
}

const mapStateToProps = state => {
  return {
    
  }};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsList);
