import { Container, Typography, makeStyles } from "@material-ui/core";

import useStyles from "./rightbar.styles";

const Rightbar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Rightbar</Container>;
};

export default Rightbar;
