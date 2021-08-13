import React from "react";

import { Grid } from "@material-ui/core";

import Navbar from "./components/navbar/navbar.component";
import Leftbar from "./components/leftbar/leftbar.component";
import Rightbar from "./components/rightbar/rightbar.component";
import Feed from "./components/feed/feed.component";
import AddPost from "./components/add-post/add-post.component";

import useStyles from "./app.styles.js";

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid className={classes.gridLeftbar} item xs={2}>
          <Leftbar />
        </Grid>
        <Grid className={classes.gridFeed} item md={7} xs={10}>
          <Feed />
        </Grid>
        <Grid className={classes.gridRightbar} item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
      <AddPost />
    </div>
  );
};

export default App;
