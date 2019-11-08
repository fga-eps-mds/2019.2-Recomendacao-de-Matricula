import React, {useState,useEffect} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import StepByStep from './pages/StepByStep';
import NotMatriculaWeb from './pages/NotMatriculaWeb';
import Titulo from './components/title'

import { BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';


function App() {
  
  const[isMatriculaWeb, setisMatriculaWeb ] = useState([]);

  useEffect(()=>{
 

  },[]);

  return (
  <BrowserRouter>
    <Switch>
    <Box width={300} height={450} bgcolor='grey.300'>     
      <Titulo/>
        <Route exact path='/' component={NotMatriculaWeb} />
        <Route exact path='/StepByStep' component={StepByStep} />
        <Redirect from='*' to='/' />
    </Box>  
    </Switch>
  </BrowserRouter>
  );
}

export default App;
