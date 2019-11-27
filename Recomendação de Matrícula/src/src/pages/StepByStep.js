/*global chrome*/
import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import Fab from '@material-ui/core/Fab';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';

import CheckIcon from '@material-ui/icons/Check';
import DnsIcon from '@material-ui/icons/Dns';

import {Link , Redirect} from 'react-router-dom'; 


const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(3),
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
   
  }));

export default function StepByStep(){
 const classes = useStyles();

  let bgpage = chrome.extension.getBackgroundPage();   

  const [isLogged, setLogged] = React.useState(false);
  const [quadroResumoIsReady, setQuadro] = React.useState(false);
  const [historicoEscolar, setHistorico] = React.useState(false);
  const [allReady, setAllReady] = React.useState(false);
  
 


  // Classnames no seguinte formato
  /*

  const <nome a ser aplicado no componente> = clsx({
  [<Estilo do useStyles()>]: <Condição pra aplicar>,
                           Se for true então aplica o estilo
  });

  */
  const loggedClassname = clsx({
    [classes.buttonSuccess]: isLogged,      
  });
  const quadroClassname = clsx({
    [classes.buttonSuccess]: quadroResumoIsReady,      
  });
  const historicoClassname = clsx({
    [classes.buttonSuccess]: historicoEscolar,      
  });


  //Verifica a cada instante as condiçoes dos estados:
  setInterval(function(){
    //Receber os dados da bgpage.

    //if Usuario ta logado ?
    if(bgpage.login==true){
    //Atualiza o estado ( setLogged(true) )
      setLogged(true);
      //if Acessou o Quadro resumo ?
      if(bgpage.quadroResumo==true){
      //Atualiza o estado ( setQuadro(true) )
        setQuadro(true);
        // if Acessou a página do Histórico Escolar ?
        if(bgpage.historico==true){
        //Atualiza o estado ( setPagina(true) )
          setHistorico(true);
        // Redireciona para a página de legendas
          setAllReady(true);
        }
      }
    }
  },500);

    if(allReady==true){
      return <Redirect from='*' to='/Legends' />;
    }
    return(
      <Grid container justify='center'>  
      <Grid container alignItems='stretch' direction='column' justify='center'>
            <Box textAlign='center' paddingTop={2} height={370}> 
              <div>
              <Grid container spacing={2}>
                  <Grid item>
                    <Paper square className={classes.paper}>
                      <Grid container item justify='center' alignItems="stretch" direction="row">
                          <Grid item> 
                            <Fab
                              aria-label="save"
                              color="primary"
                              className={loggedClassname}
                            >
                            {isLogged ? <CheckIcon /> : <DnsIcon />}
                            </Fab>
                            
                          </Grid>
                          <Grid item>  
                            <Typography component="p">
                              Faça log-in no Matrícula Web
                            </Typography>    
                          </Grid>
                      </Grid>
                    </Paper>
                  </Grid>  
                  <Grid item>
                    <Paper square className={classes.paper}>
                      <Grid container item justify='center' alignItems="stretch" direction="row">
                          <Grid item> 
                            <Fab
                              aria-label="save"
                              color="primary"
                              className={quadroClassname}
                            >
                            {quadroResumoIsReady ? <CheckIcon /> : <DnsIcon />}
                            </Fab>
                            
                          </Grid>
                          <Grid item>  
                            <Typography component="p">
                              Acesse a página do seu QUADRO RESUMO
                            </Typography>    
                          </Grid>
                      </Grid>
                    </Paper>
                  </Grid>  
                  <Grid item>
                    <Paper square className={classes.paper}>
                      <Grid container item justify='center' alignItems="stretch" direction="row">
                          <Grid item> 
                            <Fab
                              aria-label="save"
                              color="primary"
                              className={historicoClassname}
                            >
                            {historicoEscolar ? <CheckIcon /> : <DnsIcon />}
                            </Fab>
                          </Grid>

                          <Grid item>  
                            <Typography component="p">
                              Acesse a página do HISTÓRICO ESCOLAR
                            </Typography>    
                          </Grid>
                      </Grid>
                    </Paper>
                  </Grid>              
              </Grid>
              </div>
            </Box>  
        </Grid>
    </Grid>);
}