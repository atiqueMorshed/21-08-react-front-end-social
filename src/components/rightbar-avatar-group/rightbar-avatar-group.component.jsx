import { AvatarGroup } from "@material-ui/lab";
import RightbarAvatar from "../rightbar-avatar/rightbar-avatar.component";

import useStyles from "./rightbar-avatar-group.styles";

const RightbarAvatarGroup = () => {
  const classes = useStyles();
  const avatars = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <AvatarGroup className={classes.rightOnlineFriendsAvatarGroup} max={6}>
      {avatars.map((avatar) => (
        <RightbarAvatar id={avatar} />
      ))}
    </AvatarGroup>
  );
};

export default RightbarAvatarGroup;
