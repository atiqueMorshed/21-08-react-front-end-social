import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

import useStyles from "./post.styles";

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.post}>
      <CardActionArea>
        <CardMedia
          className={classes.postImage}
          image="https://source.unsplash.com/random"
          title="This is a post"
        />

        <CardContent>
          <Typography variant="h5" gutterBottom>
            Post title goes here
          </Typography>
          <Typography variant="body1">
            Incidunt quibusdam error accusamus voluptas et rerum iure!Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Officiis animi
            voluptatum, vitae aspernatur magnam dicta sunt commodi. Quidem
            dolore totam ex praesentium, incidunt quibusdam error accusamus
            voluptas et rerum iure! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis animi voluptatum, vitae aspernatur magnam
            dicta sunt commodi. Quidem dolore totam ex praesentium, incidunt
            quibusdam error accusamus voluptas et rerum iure!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          SHARE
        </Button>
        <Button size="small" color="primary">
          LEARN MORE
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
