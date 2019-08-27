import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


  

const TableOutput = ({items}) => {



  const useStyles = makeStyles(theme => ({
        root: {
          width: '100%',
          marginTop: theme.spacing(3),
          overflowX: 'auto',
          boxShadow: '0 3px 9px 0 rgba(0, 0, 0, 0.2)',
        },
        table: {
          minWidth: '100%',
        },
      }));
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Subtitle</TableCell>
            <TableCell align="right">Status</TableCell>
   
          </TableRow>
        </TableHead>
        <TableBody>
           
          {items.map((item) => (
            <TableRow key={item.title}>
              <TableCell component="th" scope="row"><div>{item.title}</div>
              </TableCell>
              <TableCell align="right"><div>{item.subtitle}</div></TableCell>
              <TableCell align="right"><div>{item.status}</div></TableCell>
     
            </TableRow>
          ))}
        
        </TableBody>
      </Table>
    </Paper>
    </Container>
  );
}
export default TableOutput