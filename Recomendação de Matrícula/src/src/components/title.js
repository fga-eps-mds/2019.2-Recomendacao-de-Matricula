import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function Titulo(){
    const classes = useStyles();
    return(
      <Button color="secondary" className={classes.button}>
          Recomendação de Matrícula
      </Button>
    );
  }