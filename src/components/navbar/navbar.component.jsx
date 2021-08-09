import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@material-ui/core";

import { Mail, Notifications } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";

import useStyles from "./navbar.styles";

const Navbar = () => {
  const [menuSearchIconClicked, setMenuSearchIconClicked] = useState(false);
  useEffect(() => {
    console.log(menuSearchIconClicked);
  }, [menuSearchIconClicked]);
  const classes = useStyles({ menuSearchIconClicked });
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.logoSM} variant="h6">
          ReactSocial
        </Typography>
        <Typography className={classes.logoXS} variant="h6">
          RS
        </Typography>
        <div className={classes.searchBoxMD}>
          <SearchIcon className={classes.searchBoxIcon} />
          <InputBase
            className={classes.searchBoxField}
            placeholder="Search..."
          />
          <CancelIcon
            className={classes.searchBoxCancel}
            onClick={() => setMenuSearchIconClicked(false)}
          />
        </div>

        <div className={classes.menuIcons}>
          <SearchIcon
            className={classes.menuSearchIcon}
            onClick={() => setMenuSearchIconClicked(true)}
          />
          <Badge className={classes.badge} badgeContent={1} color="secondary">
            <Mail />
          </Badge>
          <Badge className={classes.badge} badgeContent={1} color="secondary">
            <Notifications />
          </Badge>
          <Avatar
            className={`${classes.badge} ${classes.menuItemAvatar}`}
            alt="Remy Sharp"
            src={AccountCircleIcon}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
