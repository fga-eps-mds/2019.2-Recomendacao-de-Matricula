import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Conteudo from './components/conteudo';
import Titulo from './components/title'

function App() {

  return (
  <Box width={300} height={450} bgcolor='grey.300'>     
    <Titulo/>
    <Conteudo/>
  </Box>  
  );
}

export default App;
