import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  post: {
    marginBottom: theme.spacing(5),
    [theme.breakpoints.between(450, 599)]: {
      marginLeft: -20,
    },
  },
  postImage: {
    height: "250px",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
  },
}));

export default useStyles;
