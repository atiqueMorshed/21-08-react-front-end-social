import { Container, Typography } from "@material-ui/core";
import {
  Home,
  Person,
  List,
  PhotoCamera,
  PlayCircleOutline,
  TabletMac,
  Bookmark,
  Storefront,
  Settings,
  ExitToApp,
} from "@material-ui/icons";
import useStyles from "./leftbar.styles";

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.leftMenuItem}>
        <Home className={classes.leftMenuItemIcon} />
        <Typography className={classes.leftMenuItemText}>Homepage</Typography>
      </div>
      <div className={classes.leftMenuItem}>
        <Person className={classes.leftMenuItemIcon} />
        <Typography className={classes.leftMenuItemText}>Friends</Typography>
      </div>
      <div className={classes.leftMenuItem}>
        <List className={classes.leftMenuItemIcon} />
        <Typography className={classes.leftMenuItemText}>Lists</Typography>
      </div>
      <div className={classes.leftMenuItem}>
        <PhotoCamera className={classes.leftMenuItemIcon} />
        <Typography className={classes.leftMenuItemText}>Camera</Typography>
      </div>
      <div className={classes.leftMenuItem}>
        <PlayCircleOutline className={classes.leftMenuItemIcon} />
        <Typography className={classes.leftMenuItemText}>Videos</Typography>
      </div>
      <div className={classes.leftMenuItem}>
        <TabletMac className={classes.leftMenuItemIcon} />
        <Typography className={classes.leftMenuItemText}>Apps</Typography>
      </div>
      <div className={classes.leftMenuItem}>
        <Bookmark className={classes.leftMenuItemIcon} />
        <Typography className={classes.leftMenuItemText}>
          Collections
        </Typography>
      </div>
      <div className={classes.leftMenuItem}>
        <Storefront className={classes.leftMenuItemIcon} />
        <Typography className={classes.leftMenuItemText}>
          Market Place
        </Typography>
      </div>
      <div className={classes.leftMenuItem}>
        <Settings className={classes.leftMenuItemIcon} />
        <Typography className={classes.leftMenuItemText}>Settings</Typography>
      </div>
      <div className={classes.leftMenuItem}>
        <ExitToApp className={classes.leftMenuItemIcon} />
        <Typography className={classes.leftMenuItemText}>Logout</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
