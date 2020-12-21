import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const appBarStyles = makeStyles((theme: Theme) =>
createStyles({
    root: {
      zIndex: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    MarginRight: {
      marginRight: 50
    },
    appBar: {
      backgroundColor: "#323a44",
    }
  })
);

export default appBarStyles;