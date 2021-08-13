import { Container, TextField } from "@material-ui/core";
import React from "react";
import useStyles from "./add-post-form.styles.js";

const AddPostForm = () => {
  const classes = useStyles();
  return (
    <form className={classes.AddPostForm} noValidate autoComplete="off">
      <Container className={classes.AddPostFormContainer}>
        <div
          className={classes.AddPostFormContainerInput}
          style={{ width: "100%" }}
        >
          <TextField
            className={classes.AddPostFormContainerDivInput}
            label="Title"
            variant="outlined"
          />
        </div>
        <div className={classes.AddPostFormContainerDiv}>
          <TextField
            className={`${classes.AddPostFormContainerDivInput} ${classes.addPostInputTitle}`}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            borderRadius={10}
          />
        </div>
      </Container>
    </form>
  );
};
export default AddPostForm;
