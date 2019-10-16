import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'

import MwLink from '../mwlink';

export default function ifNotMW(){


    return(
    <Grid container justify='center'>  
        <Grid container alignItems='center' direction='column' justify='center'>

            <Grid item>
                <Box textAlign='center' height={300}>
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