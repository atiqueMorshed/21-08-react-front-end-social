import { ImageList, ImageListItem } from "@material-ui/core";

import useStyles from "./rightbar-gallery.styles";

const RightbarGallery = () => {
  const classes = useStyles();
  const imageGallery = [
    "breakfast",
    "burgers",
    "camera",
    "morning",
    "hats",
    "vegetables",
  ];
  return (
    <ImageList
      className={classes.rightImageGalleryImageList}
      rowHeight={120}
      cols={2}
    >
      {imageGallery.map((image) => (
        <ImageListItem>
          <img
            src={`https://material-ui.com/static/images/image-list/${image}.jpg`}
            alt=""
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default RightbarGallery;
