import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
      },
      divider: {
        margin: theme.spacing(2, 0),
      },
    root: {
        width: '100%',
        marginTop: theme.spacing(1),
        overflowX: 'auto',
      },
    button: {
      margin: theme.spacing(0),
      postion: "right",
    },
    input: {
      display: 'none',
    },
  }));
const SearchButton=()=> {

    const classes = useStyles();
    return (
<Container maxWidth="lg">

    <Grid container spacing={1}>
    
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}>
            <div align="right">
            <TextField id="repo" type ="" />
            </div>
            
        </Grid>
        
        <Grid item xs={3}>
        <div align="right"> 
        <Button variant="contained" color="primary" className={classes.button}>Add Repository</Button>
        </div>
        </Grid>

    </Grid>
    

</Container>
    )
}
export default SearchButton;