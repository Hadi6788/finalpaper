import { Box, Paper, Typography } from "@material-ui/core";
import profile from "../../Assets/Images/profilepic.jpg";
import { useStyles } from "./style";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const ProfileCompleteness = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.completemain}>
        <VerifiedUserIcon className={classes.icon} />
        <Typography>
          {" "}
          stand out with an upwork certification!
          <span style={{ color: "green" }}> Get Started</span>{" "}
        </Typography>
      </Box>
    </>
  );
};

export default ProfileCompleteness;
