import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const dropdownStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      flexGrow: 1,
      maxWidth: "100%",
    },
    selectEmpty: {},
  })
);

export default dropdownStyles;
