import { Container, Typography } from "@material-ui/core";
import RightbarTopCategory from "../../rightbar-top-categories/rightbar-top-categories.component.jsx";
import RightbarAvatarGroup from "../rightbar-avatar-group/rightbar-avatar-group.component.jsx";
import RightbarGallery from "../rightbar-gallery/rightbar-gallery.component";
import useStyles from "./rightbar.styles.js";

const Rightbar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className="rightOnlineFriends">
        <Typography className={classes.title} gutterBottom>
          Online Friends
        </Typography>
        <RightbarAvatarGroup />
      </div>

      <div className="rightImageGallery">
        <Typography className={classes.title} gutterBottom>
          Gallery
        </Typography>
        <RightbarGallery />
      </div>

      <div className={classes.rightTopCategories}>
        <Typography className={classes.title} gutterBottom>
          Top Categories
        </Typography>
        <div className={classes.rightTopCategoryList}>
          <RightbarTopCategory />
        </div>
      </div>
    </Container>
  );
};

export default Rightbar;
