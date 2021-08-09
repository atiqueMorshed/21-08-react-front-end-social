import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "sticky",
    top: 62,
    height: "100vh",
    overflow: "auto",
    paddingTop: theme.spacing(3),
    color: "white",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      top: 64,
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #e3e3e3",
    },
    [theme.breakpoints.down("xs")]: {
      width: "fit-content",
      margin: 0,
    },
    [theme.breakpoints.between(600, 960)]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  leftMenuItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4),
      cursor: "pointer",
    },
    // "&:last-child": {
    //   paddingBottom: theme.spacing(4),
    // },
  },

  leftMenuItemIcon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.between(600, 960)]: {
      fontSize: "1.8rem",
      margin: 0,
    },
  },

  leftMenuItemText: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
