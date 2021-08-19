import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  addFab: {
    position: "fixed",
    bottom: 20,
    right: 20,
    [theme.breakpoints.down("sm")]: {
      bottom: 20,
      right: 30,
    },
  },

  addModalCloseIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    fontSize: 32,

    "&:hover": {
      cursor: "pointer",
    },
  },

  addModalContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    height: 650,
    width: 720,
    background: "white",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
}));

export default useStyles;
