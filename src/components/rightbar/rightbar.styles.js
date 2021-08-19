import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
    position: "sticky",
    top: 64,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
  rightOnlineFriendsAvatarGroup: {
    marginBottom: 20,
  },

  rightImageGalleryImageList: {
    marginBottom: 20,
  },

  rightTopCategories: {
    marginTop: 50,
    [theme.breakpoints.down("md")]: {
      // display: "none",
    },
  },
  rightTopCategoryList: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export default useStyles;
