import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACCOUNTS_LOADED } from '../../../constants/actionsTypes';
import api_agents from '../../../middleware/api_agent';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

class AccountsList extends Component {
  componentWillMount() {
    if (!this.props.accountsList) {
      // run getAllAccounts api when accounts list is undefined
      this.props.loadAccounts(api_agents.Accounts.getAllAccounts());
    }
  }

  processWithdral = (event) => {
    event.preventDefault();
    alert("Success")
  }
  
  renderWithdrawalButton = (balance, accountType) => {
    if(accountType === 'savings') {
      return(
        <Button color="primary" onClick={this.processWithdral.bind(this)} variant="contained" disabled={balance > 0 ? false : true}>
          Withdraw
        </Button>  
      )
    } else {
      return (
        <Button color="primary" onClick={this.processWithdral.bind(this)} variant="contained" disabled={balance > -500 ? false : true}>
          Withdraw
        </Button>  
      )
    }
  }

  renderTableFooter = (totalBalance) => {
    return(
      <TableHead>
        <TableRow>
          <TableCell className="footerCopy">Balance</TableCell>
          <TableCell className="footerCopy" align="left"></TableCell>
          <TableCell className="footerCopy" align="left">ZAR {totalBalance}</TableCell>
        </TableRow>
      </TableHead>
    )
  }

  render() {
    // check if its we are getting results as an array and if contains values
    if (typeof this.props.accountsList !== 'undefined' && this.props.accountsList.length > 0) { 
      
        
        const accountsList = this.props.accountsList; // list of accounts from the state
        const renderAccounts = Object.keys(accountsList).map((key) =>{
          const accountNumber = accountsList[key].account_number;
          const accountType = accountsList[key].account_type;
          const balance = accountsList[key].balance;

          return(
            <StyledTableRow key={key}>
              <TableCell scope="row"> {accountNumber} </TableCell>
              <TableCell align="left">{accountType}</TableCell>
              <TableCell align="left">ZAR {balance}</TableCell>
              <TableCell align="right">
                {this.renderWithdrawalButton(balance, accountType)}
              </TableCell>
            </StyledTableRow>
          )
      });
      
      return(
        <Grid item md={12} container spacing={0} alignItems="center" justifyContent="center" direction="column" >
          <Grid md={6} container alignItems="center" justifyContent="center" item> 
            <Card elevation={5}>
              <TableContainer component={Paper}>
                <CardHeader
                  title="Account List"
                />
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Account Number</TableCell>
                      <TableCell align="left">Account Type</TableCell>
                      <TableCell align="left">Balance</TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {renderAccounts}
                  </TableBody>
                    {this.renderTableFooter(this.props?.accountsList.reduce((a,v) =>  a = a - -v.balance , 0 ))}
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Grid> 
      )
    } else {
      return (
        <Grid item md={12} container spacing={0} alignItems="center" justifyContent="center" direction="column" >
          <Grid md={6} container alignItems="center" justifyContent="center" item> 
            <Card elevation={5}>
                <Grid md={12} container alignItems="center" justifyContent="center" item>
                    <Typography variant="h2" className="noAccountsMessage" >
                      ERROR: No accounts to display please contact administrator
                    </Typography>
                </Grid>
            </Card>
          </Grid>
        </Grid> 
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    accountsList: state.accounts.accountsList
  }};

const mapDispatchToProps = dispatch => ({
  loadAccounts: (payload) => dispatch({type: ACCOUNTS_LOADED, payload, skipTracking: true})
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountsList);