import { Box, Paper, Typography } from "@material-ui/core";
import profile from "../../Assets/Images/profilepic.jpg";
import { useStyles } from "./style";

const ProfileCard = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.cardmain}>
        <img src={profile} alt="profile" className={classes.profileimage} />
        <Typography variant="h5"> Sheerax S. </Typography>
        <Typography>
          {" "}
          Web developer | Bakened developer |Nft marketplace{" "}
        </Typography>
      </Box>
    </>
  );
};

export default ProfileCard;
