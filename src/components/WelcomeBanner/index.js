import { Paper } from "@material-ui/core";
import { Box, Typography } from "@material-ui/core";
import paperplane from "../../Assets/Images/paperplane.png";
import { useStyles } from "./style";
const WelcomeBanner = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={6} className={classes.welcomemain}>
        <Box className={classes.welcomemaintext}>
          <Typography variant="h6">Monday, Feburary 21st</Typography>
          <Typography variant="h4">
            Good Morning, <br></br> Sheeraz S.
          </Typography>
        </Box>
        <Box>
          <img src={paperplane} className={classes.plan} />
        </Box>
      </Paper>
    </>
  );
};

export default WelcomeBanner;
