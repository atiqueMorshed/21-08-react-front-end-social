import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./add-post-form.styles.js";

const AddPostForm = ({ setForm }) => {
  const [textInput, setTextInput] = useState({
    title: "",
    message: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [visibility, setVisibility] = useState("");

  const classes = useStyles();

  useEffect(() => {
    selectedImage && setImageURL(URL.createObjectURL(selectedImage));
  }, [selectedImage]);

  const uploadImage = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleVisibility = (e) => {
    setVisibility(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      data: {
        ...textInput,
        visibility,
        selectedImage,
      },
      error: false,
      success: true,
      alert: true,
    });
  };

  const removeImage = (e) => {
    setSelectedImage(null);
    setImageURL(null);
    e.target.files = null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTextInput({
      ...textInput,
      [name]: value,
    });
  };

  return (
    <form
      className={classes.AddPostForm}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Container className={classes.addPostFormContainer}>
        <div className={classes.addPostElement}>
          <Typography variant="h4">Create A Post</Typography>
        </div>
        <div className={classes.addPostElement}>
          <TextField
            className={classes.addPostInput}
            required
            label="Title"
            name="title"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <div className={classes.addPostElement}>
          <TextField
            className={`${classes.addPostInput} ${classes.addPostInputTitle}`}
            label="Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            borderRadius={10}
            onChange={handleChange}
          />
        </div>

        <Container className={classes.addPostUploadVisibility}>
          {/* Upload button */}
          <div
            className={`${classes.addPostElement} ${classes.addPostDivImageVisibility}`}
          >
            <FormControl className={classes.addPostFormControl} required>
              <input
                id="addPostSelectImage"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={uploadImage}
              />
              <label htmlFor="addPostSelectImage">
                <ButtonGroup variant="contained" color="primary">
                  <Button
                    className={classes.addPostImageUpload}
                    component="span"
                    variant="outlined"
                  >
                    Upload Image
                  </Button>
                  <Button
                    className={classes.addPostImageRemove}
                    color="secondary"
                    variant="outlined"
                    component="span"
                    onClick={removeImage}
                  >
                    X
                  </Button>
                </ButtonGroup>
              </label>
            </FormControl>
          </div>

          {/* Visibility Dropdown */}
          <div
            className={`${classes.addPostElement} ${classes.visibilityElement}`}
          >
            <FormControl
              className={`${classes.addPostFormControl} ${classes.addPostVisibility}`}
              required
            >
              <InputLabel id="visibilitySelectLabel">Visibility</InputLabel>
              <Select
                className={classes.addPostvisibilitySelect}
                labelId="visibilitySelectLabel"
                value={visibility}
                onChange={handleVisibility}
              >
                <MenuItem value={2}>Public</MenuItem>
                <MenuItem value={1}>Friends</MenuItem>
                <MenuItem value={0}>Private</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Container>

        {/** Image Preview */}
        <div className={classes.addPostElement}>
          {selectedImage && imageURL && (
            <Box className={classes.addPostImagePreview} mt={2}>
              <div>Image Preview: </div>
              <img src={imageURL} alt={selectedImage.name} height="100px" />
            </Box>
          )}
        </div>
        <div className={classes.addPostElement}>
          <Button
            className={classes.addPostButton}
            variant="contained"
            color="primary"
            size="large"
            width="100%"
            type="submit"
          >
            Create Post
          </Button>
        </div>
      </Container>
    </form>
  );
};
export default AddPostForm;
