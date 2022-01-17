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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Account Number', 159, 6.0, 24, 4.0),
  createData('Account Type', 237, 9.0, 37, 4.3),
  createData('Balance', 262, 16.0, 24, 6.0),
  createData('Action', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class AccountsList extends Component {
  componentWillMount() {
    if (!this.props.accountsList) {
      // run getAllAccounts api when accounts list is undefined
      this.props.loadAccounts(api_agents.Accounts.getAllAccounts());
    }
  }

  render() {
    let test = this.props.accountsList

    // check if its we are getting results as an array and if contains values
    if (typeof this.props.accountsList !== 'undefined' && this.props.accountsList.length > 0) { 
        const accountsList = this.props.accountsList;
        const renderAccounts = Object.keys(accountsList).map((key) =>{
          const accountNumber = accountsList[key].account_number;
          const accountType = accountsList[key].account_type;
          const balance = accountsList[key].balance;
          
          return(
            <StyledTableRow key={accountsList[key]}>
              <StyledTableCell scope="row"> {accountNumber} </StyledTableCell>
              <StyledTableCell align="left">{accountType}</StyledTableCell>
              <StyledTableCell align="left">ZAR {balance}</StyledTableCell>
              <StyledTableCell align="right">
                <Button color="primary" variant="contained" >
                  Withdraw
                </Button>  
              </StyledTableCell>
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
                      <StyledTableCell>Account Number</StyledTableCell>
                      <StyledTableCell align="left">Account Type</StyledTableCell>
                      <StyledTableCell align="left">Balance</StyledTableCell>
                      <StyledTableCell align="left"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {renderAccounts}
                  </TableBody>
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
                    <Typography className="noAccountsMessage" variant="h2" component="h2">
                      No accounts to display please contact administrator
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
