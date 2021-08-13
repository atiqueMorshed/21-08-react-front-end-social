import React, { useState } from "react";

import { Container, Fab, Modal, Tooltip } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

import useStyles from "./add-post.styles";
import AddPostForm from "../add-post-form/add-post-form.component";

const AddPost = () => {
  const [openAddFab, setOpenAddFab] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpenAddFab(true);
  };

  const handleClose = () => {
    setOpenAddFab(false);
  };
  return (
    <>
      <Tooltip title="Add">
        <Fab className={classes.addFab} color="primary">
          <AddIcon onClick={handleOpen} />
        </Fab>
      </Tooltip>
      <Modal open={openAddFab} onClose={handleClose}>
        <Container className={classes.addModalContainer}>
          <CloseIcon
            className={classes.addModalCloseIcon}
            onClick={handleClose}
          />
          <AddPostForm />
          Ello;
        </Container>
      </Modal>
    </>
  );
};

export default AddPost;
