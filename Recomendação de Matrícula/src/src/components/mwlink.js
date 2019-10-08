import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function MwLink(){
    const classes = useStyles();
    return(
      <Button color='primary' variant='contained' size='large' className={classes.button}>
        Matrícula Web
      </Button>
    );
  }