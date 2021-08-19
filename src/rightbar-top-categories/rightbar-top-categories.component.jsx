import { Link } from "@material-ui/core";

import useStyles from "./rightbar-top-categories.styles";

const RightbarTopCategory = () => {
  const classes = useStyles();

  const topCategories = ["Sport", "Food", "Music", "Movies", "Science", "Life"];
  return (
    <>
      {topCategories.map((category) => (
        <Link href="#" className={classes.link} variant="body2">
          {category}
        </Link>
      ))}
    </>
  );
};

export default RightbarTopCategory;
