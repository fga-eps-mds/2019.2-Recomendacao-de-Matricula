import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Titulo from './title';
import MwLink from './mwlink';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   /* button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },*/
    paper: {
      height: 140,
      width: 250,
    },
  }));

export default function Conteudo(){
 const classes = useStyles();
return(     
<div className="App">
<Grid container justify='center'>  

<Grid item> 
  <Titulo/>
</Grid>  

<Grid container direction='column' justify='center'>

  <Grid item>
    <Paper className={classes.paper}>
      <h3>
      Acesse o Matrícula Web, ou Clique no Link para ser Redirecionado. 
      </h3>
    </Paper>
  </Grid>

  <Grid item>
    <MwLink/>
  </Grid>

</Grid>
</Grid>
</div>
);
}