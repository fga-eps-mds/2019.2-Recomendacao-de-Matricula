/*global chrome*/
import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

import { makeStyles } from '@material-ui/core/styles';

import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const useStyles = makeStyles(theme => ({
    cursadas: {
        backgroundColor: '#ceffca',
    },
    disponiveis: {
        backgroundColor: '#ffff00',
    },
    indisponiveis: {
        backgroundColor: '#ff00d6',
    },
    desligamento: {
        backgroundColor: '#ff4000',
    },
    root: {
        flexGrow: 1,
      },
    paper: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));


function Legends(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container >
                <Grid item>
                    <Paper className={classes.paper}>
                        <Typography component="h1">
                            Acesse a página de oferta de disciplinas ou então a página do fluxo do seu curso para ver os destaques
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item container>
                    <Grid item>
                        <Typography component="h1">
                            Legenda:

                        </Typography>
                    </Grid>
                    <Grid item container spacing={2}>
                        <Grid item container alignItems="center" wrap="nowrap" direction="row" justify="flex-start" spacing={2}>
                            <Grid item>                               
                                    <Fab className={classes.cursadas}>
                                        <CheckBoxOutlineBlankIcon/> 
                                    </Fab>                                    
                            </Grid>
                            <Grid item>
                                
                                    Disciplinas já cursadas
         
                            </Grid>    
                        </Grid>
                        <Grid item container alignItems="center" wrap="nowrap" direction="row" justify="flex-start" spacing={2}> 
                            <Grid item>
                                <Fab className={classes.disponiveis}>
                                    <CheckBoxOutlineBlankIcon/>
                                </Fab>
                            </Grid>
                            <Grid item>    
                               
                                    Disciplinas disponíveis para matrícula
                                
                            </Grid>
                        </Grid>
                        <Grid item container alignItems="center" wrap="nowrap" direction="row" justify="flex-start" spacing={2}> 
                            <Grid item>    
                                <Fab className={classes.indisponiveis}>
                                    <CheckBoxOutlineBlankIcon/>
                                </Fab>
                            </Grid>
                            <Grid item>
                                
                                    Disciplinas não disponíveis por você não possuir os pré-requisitos
                                
                            </Grid>
                        </Grid> 
                        <Grid item container alignItems="center" wrap="nowrap" direction="row" justify="flex-start" spacing={2}> 
                            <Grid item>    
                                <Fab className={classes.desligamento}>
                                    <CheckBoxOutlineBlankIcon/>
                                </Fab>
                            </Grid>
                            <Grid item>
                                
                                    Disciplinas que estão em condição de desligamento
                                
                            </Grid>
                        </Grid>    
                    </Grid>     
                </Grid>    
            </Grid>    
        </div>    
    );
}

export default Legends;