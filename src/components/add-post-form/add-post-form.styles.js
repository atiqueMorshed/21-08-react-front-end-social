import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  addPostFormContainer: {
    width: "80%",
    margin: "40px auto",
  },

  addPostElement: {
    marginTop: "30px",
  },

  addPostInput: {
    width: "100%",
    borderRadius: 8,
  },

  addPostUploadVisibility: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  addPostDivImageVisibility: {
    marginTop: 0,
    "&:first-child": {
      marginTop: 44,
    },
  },

  addPostVisibility: {
    padding: 0,
    margin: 0,
  },

  addPostvisibilitySelect: {
    minWidth: 120,
  },
}));

export default useStyles;
