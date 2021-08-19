import Avatar from "@material-ui/core/Avatar";

const RightbarAvatar = ({ id }) => {
  return (
    <Avatar
      src={`https://material-ui.com/static/images/avatar/${id}.jpg`}
      alt=""
    />
  );
};

export default RightbarAvatar;
