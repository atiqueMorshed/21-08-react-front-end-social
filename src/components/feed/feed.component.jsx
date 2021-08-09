import { Container, Typography, makeStyles } from "@material-ui/core";

import Post from "../post/post.component";
import useStyles from "./feed.styles";

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Feed;
