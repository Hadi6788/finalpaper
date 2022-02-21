// import profileCard from "../profileCard";
import { Box, Paper, Typography } from "@material-ui/core";
// import profile from "../../Assets/Images/profilepic.jpg";
import { useStyles } from "./style";

// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Categories from "../Categories";
import ProfileCard from "../ProfileCard";
import ProfileCompleteness from "../ProfileCompleteness";

const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.profilemain}>
        <ProfileCard />
        <ProfileCompleteness />
        <Categories />
      </Paper>
    </>
  );
};

export default Profile;
