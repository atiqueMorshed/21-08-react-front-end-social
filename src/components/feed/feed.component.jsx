import { Container, Typography, makeStyles } from "@material-ui/core";

import useStyles from "./feed.styles";

const Feed = () => {
  const classes = useStyles();
  return <Container className={classes.container}>Feed</Container>;
};

export default Feed;
