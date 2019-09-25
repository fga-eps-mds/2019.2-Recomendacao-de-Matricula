import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Titulo from './components/title';
import MwLink from './components/mwlink';
import Conteudo from './components/conteudo';

const useStyles = makeStyles(theme => ({
 /* button: {
    margin: theme.spacing(1),
  },*/
  input: {
    display: 'none',
  }/*
  paper: {
    height: 140,
    width: 250,
  },*/
}));

/*
function Titulo(){
  const classes = useStyles();
  return(
    <Button color="secondary" className={classes.button}>
        Recomendação de Matrícula
    </Button>
  );
}
*/
/*
function MwLink(){
  const classes = useStyles();
  return(
    <Button color='primary' className={classes.button}>
      Matrícula Web
    </Button>
  );
}
*/



function App() {
  const classes = useStyles();
  return (
      <Conteudo/>
  );
}

export default App;
