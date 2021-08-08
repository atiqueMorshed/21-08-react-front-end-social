import { alpha, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  logoSM: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  logoXS: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },

  searchBoxMD: {
    display: "flex",
    alignItems: "center",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.08),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: ({ menuSearchIconClicked }) =>
        menuSearchIconClicked ? "flex" : "none",
      width: "70%",
    },
  },

  searchBoxIcon: {
    padding: theme.spacing(0, 1.5),
  },

  searchBoxField: {
    width: "90%",
  },

  searchBoxCancel: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  menuIcons: {
    display: ({ menuSearchIconClicked }) =>
      menuSearchIconClicked ? "none" : "flex",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(2),
    },
  },

  menuSearchIcon: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },

  menuItemAvatar: {
    height: 30,
    width: 30,
  },
}));

export default useStyles;
