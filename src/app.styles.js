import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridRightbar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
