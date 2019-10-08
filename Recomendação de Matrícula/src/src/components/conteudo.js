import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'

import Titulo from './title';
import MwLink from './mwlink';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
      height: 140,
      width: 250,
    },
  }));

export default function Conteudo(){
 const classes = useStyles();
return(
<Grid container justify='center'>  
  <Grid container alignItems='center' direction='column' justify='center'>

    <Grid item>
        <Box textAlign='center' height={300}>
          <h3>
            Acesse o Matrícula Web, ou Clique no Link para ser Redirecionado. 
          </h3>
        </Box>  
    </Grid>

    <Grid item>
      <MwLink/>
    </Grid>

  </Grid>
</Grid>

);
}