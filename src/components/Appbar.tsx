import { AppBar, Typography, Toolbar, Grid } from '@material-ui/core';
import appBarStyles from '../styles/Appbar';

export const Appbar = ({title}: {title: string}) => {
    const classes = appBarStyles();

    return (
        <Grid item xs={12}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography variant="h4" className={classes.MarginRight}>
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
    )
}

export default Appbar