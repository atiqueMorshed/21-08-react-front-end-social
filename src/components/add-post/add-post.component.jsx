import React, { useEffect, useState } from "react";

import { Container, Fab, Modal, Tooltip } from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from "./add-post.styles";
import AddPostForm from "../add-post-form/add-post-form.component";

const AddPost = () => {
  const [openAddFab, setOpenAddFab] = useState(false);
  const [formData, setFormData] = useState({
    success: false,
    error: false,
    data: null,
    alert: false,
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const classes = useStyles();

  const handleOpen = () => {
    setOpenAddFab(true);
  };

  const handleClose = () => {
    setOpenAddFab(false);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setFormData({
      ...formData,
      alert: false,
    });
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
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
          <AddPostForm setForm={(obj) => setFormData(obj)} />
          <div className="addModal">
            <Snackbar
              open={formData.alert}
              autoHideDuration={3000}
              onClose={handleAlertClose}
            >
              <Alert onClose={handleAlertClose} severity="success">
                Form Data Successfully Submitted!
              </Alert>
            </Snackbar>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default AddPost;
