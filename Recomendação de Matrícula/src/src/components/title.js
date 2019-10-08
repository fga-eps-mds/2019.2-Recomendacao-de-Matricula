import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },

  }));

export default function Titulo(){
    const classes = useStyles();
    return(
      <AppBar position='static'>
        <Box textAlign='center'>
          <h4>  
            Recomendação de Matrícula 
          </h4>
        </Box>
      </AppBar>
    );
  }