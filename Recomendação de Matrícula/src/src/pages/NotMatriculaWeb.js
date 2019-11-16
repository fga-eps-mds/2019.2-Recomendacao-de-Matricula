/*global chrome*/
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

import {Link , Redirect} from 'react-router-dom'; 

const useStyles = makeStyles(theme => ({
    paper: {
      height: 140,
      width: 250,
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
   
  }));

export default function NotMatriculaWeb(){
 const classes = useStyles();
 const [isMW, setIsMW] = useState();
 
 let bgpage = chrome.extension.getBackgroundPage();   
 

 setInterval(function(){
  setIsMW(bgpage.isMatriculaWeb);
 },1000);
 //setIsMW(bgpage.isMatriculaWeb);
 console.log("This is Matricula Web? : " + isMW);
 
  if(isMW == true){
    return <Redirect from='*' to='/StepByStep' />
  }
  //Caso o usuario não esteja no matricula web
  return(
    
    <Grid container justify='center'>  
      <Box paddingTop={12} display="flex" justifyContent="flex-end" flexDirection="row-reverse">
        <Grid item>
          <CircularProgress/>
        </Grid>
      </Box>
     <Grid container alignItems='center' direction='column' justify='flex-end' spacing={5}>


       <Grid item>
            <Box textAlign='center'>              
              <h3>
                Acesse o Matrícula Web, ou Clique no Link para ser Redirecionado.
              </h3>
           </Box>  
        </Grid>

        <Grid item>
          <Button component={Link} to='/StepByStep' color='primary' variant='contained' size='large' className={classes.button}>
            Matrícula Web
          </Button>
        </Grid>
      </Grid>
    </Grid>
    
    );
  }

