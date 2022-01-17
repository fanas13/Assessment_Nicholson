import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  componentWillReceiveProps(nextProps) {
    
  }

  componentWillMount() {
    
  }

  render() {
    return(
      <Grid item md={12} container spacing={0} alignItems="center" justifyContent="center" direction="column" >
          <Grid md={6} container alignItems="center" justifyContent="center" item style={{ backgroundColor: 'yellow' }}> 
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Account Number</StyledTableCell>
                  <StyledTableCell align="right">Account Type</StyledTableCell>
                  <StyledTableCell align="right">Balance</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                  <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
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
