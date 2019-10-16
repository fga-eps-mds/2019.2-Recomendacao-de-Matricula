/*global chrome*/
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import DnsIcon from '@material-ui/icons/Dns';

import Titulo from './title';
import MwLink from './mwlink';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

export default function Conteudo(){
 const classes = useStyles();
 const [isMW, setIsMW] = useState();
 const [loading, setLoading] = React.useState(false);
 const [success, setSuccess] = React.useState(false);
 const timer = React.useRef();

 React.useEffect(() => {
  return () => {
    clearTimeout(timer.current);
  };
  }, []);

 let bgpage = chrome.extension.getBackgroundPage();   
 
  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

 setInterval(function(){
  setIsMW(bgpage.isMatriculaWeb);
 },1000);
 //setIsMW(bgpage.isMatriculaWeb);
 console.log(isMW);
 if(bgpage.isMatriculaWeb){
   //Caso o usuario esteja no matricula web
    return(
    <Grid container justify='center'>  
     <Grid container alignItems='center' direction='column' justify='center'>

       <Grid item>
            <Box textAlign='center' height={300}>
              <h3>
                Acesse seu QUADRO RESUMO e em seguida entre na página de oferta de disciplinas para as disciplinas serem destacadas
              </h3>
              <div>
                <Fab
                  aria-label="save"
                  color="primary"
                  className={buttonClassname}
                  onClick={handleButtonClick}
                >
                  {success ? <CheckIcon /> : <DnsIcon />}
                </Fab>
              {loading && <CircularProgress size={68} className={classes.fabProgress} />}
              </div>
           </Box>  
        </Grid>

        <Grid item>
          <h2>Legenda:</h2>

        </Grid>

      </Grid>
    </Grid>);
 }else{

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
          <MwLink/>
        </Grid>

      </Grid>
    </Grid>
    
    );
 }
}